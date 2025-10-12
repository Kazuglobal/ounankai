import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface SwipeCardsConfig<T> {
  items: T[];
  onSwipe?: (item: T, direction: 'left' | 'right') => void;
}

export function useSwipeCards<T>({ items, onSwipe }: SwipeCardsConfig<T>) {
  const [swipeIndex, setSwipeIndex] = useState(0);
  const [dragOffsetState, setDragOffsetState] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const dragOffsetRef = useRef(0);
  const startXRef = useRef<number | null>(null);
  const pointerIdRef = useRef<number | null>(null);
  const animationTimeoutRef = useRef<number | undefined>();
  const topCardRef = useRef<HTMLDivElement | null>(null);

  const SWIPE_THRESHOLD = 100;

  const setDragOffset = useCallback((value: number) => {
    dragOffsetRef.current = value;
    setDragOffsetState(value);
  }, []);

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current !== undefined) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (animationTimeoutRef.current !== undefined) {
      window.clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = undefined;
    }

    if (items.length === 0) {
      setSwipeIndex(0);
      setDragOffset(0);
      setIsAnimating(false);
      setIsDragging(false);
      return;
    }

    setSwipeIndex((prev) => (prev >= items.length ? 0 : prev));
    setDragOffset(0);
    setIsAnimating(false);
    setIsDragging(false);
  }, [items.length, setDragOffset]);

  const finalizeSwipe = useCallback(
    (direction: 'left' | 'right') => {
      if (isAnimating || items.length === 0) {
        return;
      }

      const currentItem = items[swipeIndex];
      if (currentItem && onSwipe) {
        onSwipe(currentItem, direction);
      }

      setIsAnimating(true);
      setIsDragging(false);
      pointerIdRef.current = null;
      startXRef.current = null;

      const cardWidth = (topCardRef.current?.offsetWidth ?? 320) * 1.35;
      const travel = direction === 'right' ? cardWidth : -cardWidth;
      setDragOffset(travel);

      if (animationTimeoutRef.current !== undefined) {
        window.clearTimeout(animationTimeoutRef.current);
      }

      animationTimeoutRef.current = window.setTimeout(() => {
        setSwipeIndex((prev) => {
          if (items.length === 0) {
            return 0;
          }
          const next = prev + 1;
          return next >= items.length ? 0 : next;
        });
        setDragOffset(0);
        setIsAnimating(false);
        animationTimeoutRef.current = undefined;
      }, 260);
    },
    [isAnimating, items, swipeIndex, onSwipe, setDragOffset],
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isAnimating || items.length === 0) {
        return;
      }
      const targetElement = event.target as HTMLElement | null;
      if (targetElement && targetElement.closest('[data-swipe-ignore="true"]')) {
        return;
      }
      if (event.pointerType === 'mouse' && event.button !== 0) {
        return;
      }
      pointerIdRef.current = event.pointerId;
      startXRef.current = event.clientX;
      setIsDragging(true);
      if (event.currentTarget.setPointerCapture) {
        event.currentTarget.setPointerCapture(event.pointerId);
      }
    },
    [isAnimating, items.length],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging || pointerIdRef.current !== event.pointerId) {
        return;
      }
      const startX = startXRef.current;
      if (startX === null) {
        return;
      }
      const delta = event.clientX - startX;
      setDragOffset(delta);
    },
    [isDragging, setDragOffset],
  );

  const resetDragState = useCallback(() => {
    setIsDragging(false);
    pointerIdRef.current = null;
    startXRef.current = null;
    setDragOffset(0);
  }, [setDragOffset]);

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (pointerIdRef.current !== null && event.currentTarget.hasPointerCapture?.(pointerIdRef.current)) {
        event.currentTarget.releasePointerCapture(pointerIdRef.current);
      }
      if (!isDragging) {
        return;
      }

      const currentOffset = dragOffsetRef.current;
      if (Math.abs(currentOffset) > SWIPE_THRESHOLD) {
        finalizeSwipe(currentOffset > 0 ? 'right' : 'left');
      } else {
        resetDragState();
      }
    },
    [finalizeSwipe, isDragging, resetDragState],
  );

  const handlePointerCancel = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (pointerIdRef.current !== null && event.currentTarget.hasPointerCapture?.(pointerIdRef.current)) {
        event.currentTarget.releasePointerCapture(pointerIdRef.current);
      }
      if (!isAnimating) {
        resetDragState();
      }
    },
    [isAnimating, resetDragState],
  );

  const handleManualSwipe = useCallback(
    (direction: 'left' | 'right') => {
      if (isAnimating || items.length === 0) {
        return;
      }
      finalizeSwipe(direction);
    },
    [finalizeSwipe, isAnimating, items.length],
  );

  const visibleIndices = useMemo(() => {
    if (items.length === 0) {
      return [] as number[];
    }
    const maxCards = Math.min(3, items.length);
    const indices: number[] = [];
    for (let offset = 0; offset < maxCards; offset += 1) {
      const index = (swipeIndex + offset) % items.length;
      if (!indices.includes(index)) {
        indices.push(index);
      }
    }
    return indices;
  }, [swipeIndex, items.length]);

  return {
    swipeIndex,
    dragOffset: dragOffsetState,
    isDragging,
    isAnimating,
    topCardRef,
    visibleIndices,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerCancel,
    handleManualSwipe,
  };
}
