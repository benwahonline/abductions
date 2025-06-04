 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/app/about/page.tsx
index 0000000000000000000000000000000000000000..71c7a733458f0715ee87ec77d392b5ad12fdf5ef 100644
--- a//dev/null
+++ b/web/app/about/page.tsx
@@ -0,0 +1,13 @@
+export default function About() {
+  return (
+    <div className="space-y-4">
+      <h1 className="text-2xl font-bold">About Tanganyikan</h1>
+      <p>
+        Tanganyikan is an NGO dedicated to protecting civil liberties,
+        promoting democracy and good governance, and speaking out against police
+        brutality. We document cases of missing and abducted persons in
+        Tanzania and provide support for affected families.
+      </p>
+    </div>
+  );
+}
 
EOF
)