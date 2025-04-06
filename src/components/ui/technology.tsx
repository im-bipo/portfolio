import React from "react";
import {
  // Frontend
  Code2 as NextJsIcon,
  Atom as ReactJsIcon,
  FileType as TypeScriptIcon,
  Wind as TailwindCssIcon,
  Code as HTMLIcon,
  Palette as CSSIcon,
  FileJson as JavaScriptIcon,

  // Backend
  Server as NodeJsIcon,
  LayoutGrid as ExpressJsIcon,
  Network as GraphQLIcon,
  PyramidIcon as PrismaIcon,
  Box as AppwriteIcon,

  // Vector Databases
  Database as PineconeIcon,
  Grid3x3 as WeaviateIcon,
  Boxes as MilvusIcon,
  Box as QdrantIcon,
  TriangleAlert as ChromaIcon,

  // LLM Models
  Brain as GPT4Icon,
  CircleDot as ClaudeIcon,
  FlaskConical as LLaMAIcon,
  Sparkles as MistralIcon,
  Stars as GeminiIcon,

  // ML/AI Frameworks
  Flame as PyTorchIcon,
  BadgeAlert as TensorFlowIcon,
  ThumbsUp as HuggingfaceIcon,

  // Orchestration
  LucideUnlink as LangchainIcon,
  Link as LlamaIndexIcon,
  RectangleHorizontal as HaystackIcon,

  // Embedding Models
  Lightbulb as OpenAIEmbeddingsIcon,
  AlignLeft as SentenceTransformersIcon,

  // Other Tools
  Bolt as RedisIcon,
  Ship as DockerIcon,
  CircleOff as KubernetesIcon,
  Leaf as MongoDBIcon,
  Database as PostgreSQLIcon,
  Shield as SupabaseIcon,
  Flame as FirebaseIcon,
} from "lucide-react";

// Define color schemes for light and dark modes
export const tech = {
  // Frontend
  NextJs: {
    icon: NextJsIcon,
    lightColor: "#000000",
    darkColor: "#FFFFFF",
    title: "Next.js",
  },
  ReactJs: {
    icon: ReactJsIcon,
    lightColor: "#61DAFB",
    darkColor: "#61DAFB",
    title: "React.js",
  },
  TypeScript: {
    icon: TypeScriptIcon,
    lightColor: "#3178C6",
    darkColor: "#3178C6",
    title: "TypeScript",
  },
  TailwindCss: {
    icon: TailwindCssIcon,
    lightColor: "#38B2AC",
    darkColor: "#38B2AC",
    title: "Tailwind CSS",
  },
  HTML: {
    icon: HTMLIcon,
    lightColor: "#E34F26",
    darkColor: "#E34F26",
    title: "HTML",
  },
  CSS: {
    icon: CSSIcon,
    lightColor: "#1572B6",
    darkColor: "#1572B6",
    title: "CSS",
  },
  JavaScript: {
    icon: JavaScriptIcon,
    lightColor: "#F7DF1E",
    darkColor: "#F7DF1E",
    title: "JavaScript",
  },

  // Backend
  NodeJs: {
    icon: NodeJsIcon,
    lightColor: "#68A063",
    darkColor: "#68A063",
    title: "Node.js",
  },
  ExpressJs: {
    icon: ExpressJsIcon,
    lightColor: "#000000",
    darkColor: "#FFFFFF",
    title: "Express.js",
  },
  GraphQL: {
    icon: GraphQLIcon,
    lightColor: "#E535AB",
    darkColor: "#E535AB",
    title: "GraphQL",
  },
  Prisma: {
    icon: PrismaIcon,
    lightColor: "#2D3748",
    darkColor: "#e3e3ff",
    title: "Prisma",
  },
  Appwrite: {
    icon: AppwriteIcon,
    lightColor: "#FD366E",
    darkColor: "#FD366E",
    title: "Appwrite",
  },

  // Vector Databases
  Pinecone: {
    icon: PineconeIcon,
    lightColor: "#0D96F2",
    darkColor: "#0D96F2",
    title: "Pinecone",
  },
  Weaviate: {
    icon: WeaviateIcon,
    lightColor: "#FF5A5F",
    darkColor: "#FF5A5F",
    title: "Weaviate",
  },
  Milvus: {
    icon: MilvusIcon,
    lightColor: "#00A6FB",
    darkColor: "#00A6FB",
    title: "Milvus",
  },
  Qdrant: {
    icon: QdrantIcon,
    lightColor: "#6C3483",
    darkColor: "#6C3483",
    title: "Qdrant",
  },
  Chroma: {
    icon: ChromaIcon,
    lightColor: "#32CD32",
    darkColor: "#32CD32",
    title: "ChromaDB",
  },

  // LLM Models
  GPT4: {
    icon: GPT4Icon,
    lightColor: "#10A37F",
    darkColor: "#10A37F",
    title: "GPT-4",
  },
  Claude: {
    icon: ClaudeIcon,
    lightColor: "#925DF0",
    darkColor: "#925DF0",
    title: "Claude",
  },
  LLaMA: {
    icon: LLaMAIcon,
    lightColor: "#FF6B6B",
    darkColor: "#FF6B6B",
    title: "LLaMA",
  },
  Mistral: {
    icon: MistralIcon,
    lightColor: "#5D87E1",
    darkColor: "#5D87E1",
    title: "Mistral",
  },
  Gemini: {
    icon: GeminiIcon,
    lightColor: "#4285F4",
    darkColor: "#4285F4",
    title: "Gemini",
  },

  // ML/AI Frameworks
  PyTorch: {
    icon: PyTorchIcon,
    lightColor: "#EE4C2C",
    darkColor: "#EE4C2C",
    title: "PyTorch",
  },
  TensorFlow: {
    icon: TensorFlowIcon,
    lightColor: "#FF6F00",
    darkColor: "#FF6F00",
    title: "TensorFlow",
  },
  Huggingface: {
    icon: HuggingfaceIcon,
    lightColor: "#FFAD00",
    darkColor: "#FFAD00",
    title: "Hugging Face",
  },

  // Orchestration
  Langchain: {
    icon: LangchainIcon,
    lightColor: "#34A853",
    darkColor: "#34A853",
    title: "LangChain",
  },
  LlamaIndex: {
    icon: LlamaIndexIcon,
    lightColor: "#FF5733",
    darkColor: "#FF5733",
    title: "LlamaIndex",
  },
  Haystack: {
    icon: HaystackIcon,
    lightColor: "#036EB8",
    darkColor: "#036EB8",
    title: "Haystack",
  },

  // Embedding Models
  OpenAIEmbeddings: {
    icon: OpenAIEmbeddingsIcon,
    lightColor: "#10A37F",
    darkColor: "#10A37F",
    title: "OpenAI Embeddings",
  },
  SentenceTransformers: {
    icon: SentenceTransformersIcon,
    lightColor: "#8B5CF6",
    darkColor: "#8B5CF6",
    title: "Sentence Transformers",
  },

  // Other Tools
  Redis: {
    icon: RedisIcon,
    lightColor: "#DC382D",
    darkColor: "#DC382D",
    title: "Redis",
  },
  Docker: {
    icon: DockerIcon,
    lightColor: "#2496ED",
    darkColor: "#2496ED",
    title: "Docker",
  },
  Kubernetes: {
    icon: KubernetesIcon,
    lightColor: "#326CE5",
    darkColor: "#326CE5",
    title: "Kubernetes",
  },
  MongoDB: {
    icon: MongoDBIcon,
    lightColor: "#4DB33D",
    darkColor: "#4DB33D",
    title: "MongoDB",
  },
  PostgreSQL: {
    icon: PostgreSQLIcon,
    lightColor: "#336791",
    darkColor: "#336791",
    title: "PostgreSQL",
  },
  Supabase: {
    icon: SupabaseIcon,
    lightColor: "#3ECF8E",
    darkColor: "#3ECF8E",
    title: "Supabase",
  },
  Firebase: {
    icon: FirebaseIcon,
    lightColor: "#FFCA28",
    darkColor: "#FFCA28",
    title: "Firebase",
  },
};

type TechnologyProps = {
  variant: keyof typeof tech;
  className?: string;
  mode?: "light" | "dark";
};

const Technology = ({ variant, className, mode = "dark" }: TechnologyProps) => {
  const { icon: Icon, lightColor, darkColor, title } = tech[variant];
  const color = mode === "light" ? lightColor : darkColor;

  return (
    <div
      className={`flex items-center gap-2 ${className} grayscale-[40%]`}
      style={{ color }}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
};

export default Technology;
