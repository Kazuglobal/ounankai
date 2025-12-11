import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useCursor, Text, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { easing } from 'maath';

// Constants
const PAGE_WIDTH = 1.5;
const PAGE_HEIGHT = 2.1; // A4 ratio
const PAGE_DEPTH = 0.005; // Thinner pages
const SPINE_WIDTH = 0.05;
const TOTAL_PAGES = 8;
const TOTAL_SHEETS = TOTAL_PAGES / 2;

// Geometries & Materials
const pageGeometry = new THREE.BoxGeometry(PAGE_WIDTH, PAGE_HEIGHT, PAGE_DEPTH);
// Shift geometry so pivot is at the left edge
pageGeometry.translate(PAGE_WIDTH / 2, 0, 0);

const spineGeometry = new THREE.BoxGeometry(SPINE_WIDTH, PAGE_HEIGHT, PAGE_DEPTH * TOTAL_SHEETS * 1.2);
const spineMaterial = new THREE.MeshStandardMaterial({ color: '#5c3a21' }); // Leather-ish brown

interface PageData {
    index: number; // Sheet index (0 to 3)
    frontPageNum: number; // 0, 2, 4, 6
    backPageNum: number; // 1, 3, 5, 7
}

interface PageProps {
    data: PageData;
    isFlipped: boolean;
    onFlip: () => void;
    totalSheets: number;
}

// Content Component for individual pages
const PageContent = ({ pageNum }: { pageNum: number }) => {
    const textColor = "#333";
    const subTextColor = "#555";

    // Page 1: Cover
    if (pageNum === 0) {
        return (
            <group>
                <Text position={[0, 0.8, 0.001]} fontSize={0.15} color={textColor} anchorX="center">
                    盛工同窓会報
                </Text>
                <Text position={[0, 0.65, 0.001]} fontSize={0.1} color={textColor} anchorX="center">
                    第74号
                </Text>
                <mesh position={[0, 0.1, 0.001]}>
                    <planeGeometry args={[1.2, 0.8]} />
                    <meshStandardMaterial color="#a8c5da" /> {/* Placeholder Image */}
                </mesh>
                <Text position={[0, -0.4, 0.001]} fontSize={0.08} color={subTextColor} anchorX="center">
                    2025年 (令和7年) 発行
                </Text>
                <Text position={[0, -0.8, 0.001]} fontSize={0.06} color={subTextColor} anchorX="center">
                    岩手県立盛岡工業高等学校同窓会
                </Text>
            </group>
        );
    }

    // Page 2: Chairman's Greeting
    if (pageNum === 1) {
        return (
            <group>
                <Text position={[0, 0.8, 0.001]} fontSize={0.1} color={textColor} anchorX="center">
                    会長挨拶
                </Text>
                <mesh position={[-0.4, 0.5, 0.001]}>
                    <planeGeometry args={[0.4, 0.5]} />
                    <meshStandardMaterial color="#d1d1d1" /> {/* Photo */}
                </mesh>
                <Text position={[0.2, 0.5, 0.001]} fontSize={0.05} color={textColor} anchorX="left" maxWidth={0.6}>
                    同窓生の皆様におかれましては、
                    益々ご清祥のこととお慶び申し上げます。
                    日頃より同窓会活動にご理解とご協力を
                    賜り、厚く御礼申し上げます。
                </Text>
                <Text position={[0, -0.2, 0.001]} fontSize={0.04} color={textColor} anchorX="center" maxWidth={1.2} lineHeight={1.5}>
                    本年度は創立100周年を迎える記念すべき年となりました。
                    これまでの歴史を振り返り、新たな未来へと歩みを進める
                    重要な節目です。皆様と共にこの喜びを分かち合いたいと
                    思います。
                </Text>
            </group>
        );
    }

    // Page 3: General Meeting Report
    if (pageNum === 2) {
        return (
            <group>
                <Text position={[0, 0.8, 0.001]} fontSize={0.1} color={textColor} anchorX="center">
                    総会報告
                </Text>
                <Text position={[0, 0.5, 0.001]} fontSize={0.06} color={textColor} anchorX="center" maxWidth={1.2}>
                    令和6年度 定時総会が開催されました
                </Text>
                <mesh position={[0, 0.1, 0.001]}>
                    <planeGeometry args={[1.2, 0.5]} />
                    <meshStandardMaterial color="#e0e0e0" /> {/* Meeting Photo */}
                </mesh>
                <Text position={[-0.5, -0.3, 0.001]} fontSize={0.05} color={textColor} anchorX="left">
                    ・第1号議案 事業報告
                </Text>
                <Text position={[-0.5, -0.4, 0.001]} fontSize={0.05} color={textColor} anchorX="left">
                    ・第2号議案 決算報告
                </Text>
                <Text position={[-0.5, -0.5, 0.001]} fontSize={0.05} color={textColor} anchorX="left">
                    ・第3号議案 役員改選
                </Text>
                <Text position={[0, -0.7, 0.001]} fontSize={0.04} color={subTextColor} anchorX="center" maxWidth={1.2}>
                    全ての議案が慎重審議の上、承認されました。
                </Text>
            </group>
        );
    }

    // Page 4: School News & Club Activities
    if (pageNum === 3) {
        return (
            <group>
                <Text position={[0, 0.8, 0.001]} fontSize={0.1} color={textColor} anchorX="center">
                    母校の近況・部活動
                </Text>
                <mesh position={[-0.3, 0.4, 0.001]}>
                    <planeGeometry args={[0.5, 0.4]} />
                    <meshStandardMaterial color="#ffcccb" /> {/* Club Photo 1 */}
                </mesh>
                <mesh position={[0.3, 0.4, 0.001]}>
                    <planeGeometry args={[0.5, 0.4]} />
                    <meshStandardMaterial color="#add8e6" /> {/* Club Photo 2 */}
                </mesh>
                <Text position={[0, 0.0, 0.001]} fontSize={0.05} color={textColor} anchorX="center" maxWidth={1.2}>
                    バスケットボール部 県大会優勝！
                    吹奏楽部 東北大会金賞受賞！
                </Text>
                <Text position={[0, -0.4, 0.001]} fontSize={0.04} color={textColor} anchorX="center" maxWidth={1.2} lineHeight={1.5}>
                    生徒たちの活躍が目覚ましい一年でした。
                    文武両道を実践し、多くの成果を上げています。
                    同窓会としても引き続き支援を行って参ります。
                </Text>
            </group>
        );
    }

    // Page 5: Branch News
    if (pageNum === 4) {
        return (
            <group>
                <Text position={[0, 0.8, 0.001]} fontSize={0.1} color={textColor} anchorX="center">
                    支部だより
                </Text>
                <Text position={[-0.5, 0.6, 0.001]} fontSize={0.06} color={textColor} anchorX="left">
                    【東京支部】
                </Text>
                <Text position={[0, 0.45, 0.001]} fontSize={0.04} color={textColor} anchorX="center" maxWidth={1.2}>
                    3年ぶりに対面での総会を開催しました。
                    多くの新卒者も参加し、盛況となりました。
                </Text>
                <Text position={[-0.5, 0.2, 0.001]} fontSize={0.06} color={textColor} anchorX="left">
                    【仙台支部】
                </Text>
                <Text position={[0, 0.05, 0.001]} fontSize={0.04} color={textColor} anchorX="center" maxWidth={1.2}>
                    芋煮会を開催し、親睦を深めました。
                </Text>
                <mesh position={[0, -0.4, 0.001]}>
                    <planeGeometry args={[1.0, 0.4]} />
                    <meshStandardMaterial color="#90ee90" /> {/* Branch Photo */}
                </mesh>
            </group>
        );
    }

    // Page 6: Financial Report
    if (pageNum === 5) {
        return (
            <group>
                <Text position={[0, 0.8, 0.001]} fontSize={0.1} color={textColor} anchorX="center">
                    会計報告
                </Text>
                <Text position={[0, 0.6, 0.001]} fontSize={0.05} color={textColor} anchorX="center">
                    令和5年度 収支決算書 (抜粋)
                </Text>

                {/* Simple Table Simulation */}
                <group position={[0, 0.2, 0]}>
                    <mesh position={[0, 0, 0.001]}>
                        <planeGeometry args={[1.2, 0.6]} />
                        <meshStandardMaterial color="#f5f5f5" />
                    </mesh>
                    <Text position={[-0.4, 0.2, 0.002]} fontSize={0.04} color={textColor} anchorX="left">収入の部合計</Text>
                    <Text position={[0.4, 0.2, 0.002]} fontSize={0.04} color={textColor} anchorX="right">12,345,000 円</Text>

                    <Text position={[-0.4, 0.0, 0.002]} fontSize={0.04} color={textColor} anchorX="left">支出の部合計</Text>
                    <Text position={[0.4, 0.0, 0.002]} fontSize={0.04} color={textColor} anchorX="right">10,000,000 円</Text>

                    <Text position={[-0.4, -0.2, 0.002]} fontSize={0.04} color={textColor} anchorX="left">次年度繰越金</Text>
                    <Text position={[0.4, -0.2, 0.002]} fontSize={0.04} color={textColor} anchorX="right">2,345,000 円</Text>
                </group>

                <Text position={[0, -0.5, 0.001]} fontSize={0.04} color={subTextColor} anchorX="center" maxWidth={1.2}>
                    詳細は総会資料をご確認ください。
                    会計監査により適正と認められました。
                </Text>
            </group>
        );
    }

    // Page 7: Donations & Editor's Note
    if (pageNum === 6) {
        return (
            <group>
                <Text position={[0, 0.8, 0.001]} fontSize={0.08} color={textColor} anchorX="center">
                    寄付金のお願い
                </Text>
                <Text position={[0, 0.5, 0.001]} fontSize={0.04} color={textColor} anchorX="center" maxWidth={1.2}>
                    母校の教育環境整備のため、
                    皆様のご支援をお願い申し上げます。
                </Text>
                <mesh position={[0, 0.2, 0.001]}>
                    <planeGeometry args={[1.0, 0.3]} />
                    <meshStandardMaterial color="#fffacd" /> {/* Donation Info Box */}
                </mesh>

                <Text position={[0, -0.2, 0.001]} fontSize={0.08} color={textColor} anchorX="center">
                    編集後記
                </Text>
                <Text position={[0, -0.5, 0.001]} fontSize={0.04} color={textColor} anchorX="center" maxWidth={1.2}>
                    今号も多くの皆様のご協力により
                    無事発行することができました。
                    次号に向けた企画も進行中です。
                    ご意見・ご感想をお待ちしております。
                </Text>
            </group>
        );
    }

    // Page 8: Back Cover
    if (pageNum === 7) {
        return (
            <group>
                <Text position={[0, 0.5, 0.001]} fontSize={0.1} color={textColor} anchorX="center">
                    広告
                </Text>
                <mesh position={[0, 0.1, 0.001]}>
                    <planeGeometry args={[1.2, 0.6]} />
                    <meshStandardMaterial color="#f0f8ff" /> {/* Ad Placeholder */}
                </mesh>
                <Text position={[0, 0.1, 0.002]} fontSize={0.06} color="#888" anchorX="center">
                    広告スペース
                </Text>

                <Text position={[0, -0.5, 0.001]} fontSize={0.05} color={textColor} anchorX="center">
                    岩手県立盛岡工業高等学校同窓会 事務局
                </Text>
                <Text position={[0, -0.6, 0.001]} fontSize={0.04} color={subTextColor} anchorX="center">
                    〒020-0834 岩手県盛岡市羽場18地割11-1
                </Text>
                <Text position={[0, -0.7, 0.001]} fontSize={0.04} color={subTextColor} anchorX="center">
                    TEL: 019-636-1511
                </Text>
            </group>
        );
    }

    return null;
};

function Page({ data, isFlipped, onFlip, totalSheets }: PageProps) {
    const group = useRef<THREE.Group>(null);
    const [hovered, setHover] = useState(false);
    useCursor(hovered);

    useFrame((_, delta) => {
        if (!group.current) return;

        // Target rotation: 0 (right) to -Math.PI (left)
        const targetRotation = isFlipped ? -Math.PI : 0;

        // Smooth rotation
        easing.dampE(
            group.current.rotation,
            [0, targetRotation, 0],
            0.5, // Slower, more majestic flip
            delta
        );

        // Calculate "lift" based on current rotation
        // When rotation is -PI/2 (midway), lift should be max
        const currentRotation = group.current.rotation.y;
        const progress = Math.abs(currentRotation / Math.PI); // 0 to 1

        // Lift curve: sin(progress * PI)
        const liftAmount = 0.5; // How high it lifts
        const lift = Math.sin(progress * Math.PI) * liftAmount;

        // Z-index stacking
        // When right (progress 0): Stack from bottom up (Sheet 0 at top) -> Z = (total - index) * gap
        // When left (progress 1): Stack from bottom up (Sheet 0 at bottom) -> Z = index * gap
        const gap = 0.01;
        const zRight = (totalSheets - data.index) * gap;
        const zLeft = data.index * gap;

        // Interpolate Z position
        // We use a custom interpolation to keep it flat at ends and lift in middle
        const baseZ = THREE.MathUtils.lerp(zRight, zLeft, progress);

        group.current.position.z = baseZ + lift;
    });

    // Colors for pages to distinguish them
    const getPageColor = (pageNum: number) => {
        if (pageNum === 0) return '#e3d5ca'; // Cover
        if (pageNum === 7) return '#e3d5ca'; // Back Cover
        return '#fdfbf7'; // Inner pages (off-white)
    };

    return (
        <group ref={group}>
            <mesh
                geometry={pageGeometry}
                castShadow
                receiveShadow
                onClick={(e) => {
                    e.stopPropagation();
                    onFlip();
                }}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setHover(true);
                }}
                onPointerOut={() => setHover(false)}
            >
                <meshStandardMaterial color="white" />

                {/* Front Content (Visible when on right) */}
                <group position={[PAGE_WIDTH / 2, 0, PAGE_DEPTH / 2 + 0.001]}>
                    <mesh position={[0, 0, 0]}>
                        <planeGeometry args={[PAGE_WIDTH * 0.9, PAGE_HEIGHT * 0.9]} />
                        <meshStandardMaterial color={getPageColor(data.frontPageNum)} />
                    </mesh>
                    <PageContent pageNum={data.frontPageNum} />
                    <Text
                        position={[0, -0.95, 0.001]}
                        fontSize={0.05}
                        color="#333"
                    >
                        {data.frontPageNum + 1}
                    </Text>
                </group>

                {/* Back Content (Visible when on left) */}
                <group position={[PAGE_WIDTH / 2, 0, -PAGE_DEPTH / 2 - 0.001]} rotation={[0, Math.PI, 0]}>
                    <mesh position={[0, 0, 0]}>
                        <planeGeometry args={[PAGE_WIDTH * 0.9, PAGE_HEIGHT * 0.9]} />
                        <meshStandardMaterial color={getPageColor(data.backPageNum)} />
                    </mesh>
                    <PageContent pageNum={data.backPageNum} />
                    <Text
                        position={[0, -0.95, 0.001]}
                        fontSize={0.05}
                        color="#333"
                    >
                        {data.backPageNum + 1}
                    </Text>
                </group>
            </mesh>
        </group>
    );
}

function Book() {
    const [flippedIndex, setFlippedIndex] = useState(-1); // Index of the last flipped sheet (on the left)

    const sheets: PageData[] = useMemo(() => {
        return Array.from({ length: TOTAL_SHEETS }).map((_, i) => ({
            index: i,
            frontPageNum: i * 2,
            backPageNum: i * 2 + 1,
        }));
    }, []);

    const handleFlip = (index: number) => {
        if (index > flippedIndex) {
            // Flipping forward (Right to Left)
            setFlippedIndex(index);
        } else {
            // Flipping backward (Left to Right)
            setFlippedIndex(index - 1);
        }
    };

    return (
        <group rotation-y={-Math.PI / 2} position={[0, 0, 0]}>
            {/* Spine */}
            <mesh geometry={spineGeometry} material={spineMaterial} position={[0, 0, 0]} castShadow receiveShadow />

            {/* Pages */}
            {sheets.map((sheet) => (
                <Page
                    key={sheet.index}
                    data={sheet}
                    isFlipped={sheet.index <= flippedIndex}
                    onFlip={() => handleFlip(sheet.index)}
                    totalSheets={TOTAL_SHEETS}
                />
            ))}
        </group>
    );
}

const Newsletter3D = () => {
    return (
        <div className="h-[700px] w-full bg-gray-100 rounded-xl overflow-hidden shadow-inner">
            <Canvas shadows camera={{ position: [0, 2, 6], fov: 35 }}>
                <group position={[0, -0.5, 0]}>
                    <Book />
                </group>

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[5, 10, 5]}
                    angle={0.4}
                    penumbra={0.5}
                    intensity={1}
                    castShadow
                    shadow-bias={-0.0001}
                />
                <pointLight position={[-5, 5, 5]} intensity={0.5} />

                <Environment preset="city" />
                <OrbitControls
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                />
            </Canvas>
        </div>
    );
};

export default Newsletter3D;
