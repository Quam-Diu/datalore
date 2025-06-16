import { motion } from "framer-motion";
import { BrainCog, Layers3, RefreshCw, FolderGit2, Users } from "lucide-react";

const Step = ({ icon: Icon, title, description }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center p-4 border rounded-2xl shadow-md bg-white">
    <Icon className="w-10 h-10 text-blue-600 mb-2" />
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">🧠 Model Context Protocol (MCP)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Step icon={FolderGit2} title="Context Store" description="Memoria compartida persistente entre agentes." />
        <Step icon={RefreshCw} title="Context Adapter" description="Filtra y transforma el contexto según la tarea." />
        <Step icon={BrainCog} title="Agente Especializado" description="Procesa con base en el contexto adaptado." />
        <Step icon={Layers3} title="Protocol Handler" description="Gestiona coherencia y flujos entre agentes." />
        <Step icon={Users} title="Session Manager" description="Orquesta múltiples interacciones con contexto." />
      </div>
    </div>
  );
}