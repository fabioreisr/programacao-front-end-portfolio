
type CardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function Card(props: CardProps) {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                {props.icon}
                <h4 className="text-xl font-bold mb-5">{props.title}</h4>
                <p className="text-gray-600">{props.description}</p>
            </div>
        </div>
    );
}
