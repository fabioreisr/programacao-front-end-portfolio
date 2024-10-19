import { FaDumbbell, FaRunning, FaSwimmer } from "react-icons/fa";
import Card from "../card";

export default function Projects() {
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <h1 className="text-center text-4xl text-customBlue uppercase font-bold">
                    Meus <span className="text-customRed">Serviços</span>
                </h1>
                <div className="border-b-2 border-customRed mt-4 w-1/6 mx-auto"></div>
                <div className="flex flex-wrap">
                    <Card
                        icon={<FaRunning size={50} />}
                        title="Aulas de Funcional"
                        description="O objetivo do treinamento funcional é potencializar e transformar a sua capacidade de realizar atividades diárias." />
                    <Card
                        icon={<FaDumbbell size={50} />}
                        title="Musculação"
                        description="O objetivo do treinamento funcional é potencializar e transformar a sua capacidade de realizar atividades diárias." />
                    <Card
                        icon={<FaSwimmer size={50} />}
                        title="Natação"
                        description="O objetivo do treinamento funcional é potencializar e transformar a sua capacidade de realizar atividades diárias." />
                    <Card
                        icon={<FaSwimmer size={50} />}
                        title="Coordenador"
                        description="O objetivo do treinamento funcional é potencializar e transformar a sua capacidade de realizar atividades diárias." />
                    <Card
                        icon={<FaSwimmer size={50} />}
                        title="Personal Trainer"
                        description="O objetivo do treinamento funcional é potencializar e transformar a sua capacidade de realizar atividades diárias." />

                    <Card
                        icon={<FaSwimmer size={50} />}
                        title="Supervisor"
                        description="O objetivo do treinamento funcional é potencializar e transformar a sua capacidade de realizar atividades diárias." />
                </div>
            </div>
        </section>
    )
}