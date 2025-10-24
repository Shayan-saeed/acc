import { notFound } from "next/navigation";
import { insights } from "../../../../utils/data";
import { ArrowLeft } from "lucide-react";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";

export default async function InsightPage({ params }) {
  const insight = insights.find((item) => item.id === params.id);

  if (!insight) {
    return notFound();
  }

// Path to file inside public/
  const filePath = path.join(process.cwd(), "public", insight.file);
  let content = "";
  try {
    content = await fs.readFile(filePath, "utf-8");
  } catch (err) {
    return notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 my-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">
          <Link href="/insights" className="hover:underline hover:text-primary">
            Insights
          </Link>{" "}
          / {insight.title}
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {insight.title}
        </h1>

        <article
          className="prose prose-lg prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Back button */}
        <div className="mt-10">
          <Link
            href="/insights"
            className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
          >
            ← Back to Insights
          </Link>
        </div>
      </div>
    </div>
  );
}
