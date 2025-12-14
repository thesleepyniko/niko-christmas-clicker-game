import Image from "next/image";

type JollyOrpheusClickProps = {
    onClick: () => void;
};

export default function JollyOrpheusClick({ onClick }: JollyOrpheusClickProps) {
    return (
        <button onClick={onClick}>
            <Image className="hover:scale-110 transition duration-100 ease-in-out"src="/nikohappy.jpg" width={512} height={512} alt="Happy Niko with a present!"/>
        </button>
    )
}