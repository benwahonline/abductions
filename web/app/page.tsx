 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/app/page.tsx
index 0000000000000000000000000000000000000000..50b6a7aa3908cb33ea8d28cfacf1e1e97b205e7b 100644
--- a//dev/null
+++ b/web/app/page.tsx
@@ -0,0 +1,13 @@
+export default function Home() {
+  return (
+    <div className="space-y-6">
+      <h1 className="text-3xl font-bold">Missing & Abducted Persons in Tanzania</h1>
+      <p>
+        Welcome to Tanganyikan. We are a civil society organization advocating
+        for civil liberties and fighting against police brutality. Our mission is
+        to document cases of enforced disappearances and help families reunite
+        with their loved ones.
+      </p>
+    </div>
+  );
+}
 
EOF
)