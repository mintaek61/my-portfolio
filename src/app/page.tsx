import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase
    .from("ping")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold mb-4">Supabase 연결 확인</h1>
      {error && <p className="text-red-500">❌ {error.message}</p>}
      {data && (
        <pre className="bg-neutral-900 text-neutral-100 p-4 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </main>
  );
}
