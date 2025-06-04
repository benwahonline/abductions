 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/data/persons.ts
index 0000000000000000000000000000000000000000..d9940958e3526eb14b34cf2bcc60c95fc6199c88 100644
--- a//dev/null
+++ b/web/data/persons.ts
@@ -0,0 +1,30 @@
+export interface Person {
+  id: number;
+  name: string;
+  dateMissing: string;
+  location: string;
+  lat: number;
+  lng: number;
+  image: string;
+}
+
+export const persons: Person[] = [
+  {
+    id: 1,
+    name: "John Doe",
+    dateMissing: "2024-01-15",
+    location: "Dar es Salaam",
+    lat: -6.7924,
+    lng: 39.2083,
+    image: "https://placekitten.com/200/200"
+  },
+  {
+    id: 2,
+    name: "Jane Smith",
+    dateMissing: "2024-03-02",
+    location: "Dodoma",
+    lat: -6.162,
+    lng: 35.7516,
+    image: "https://placekitten.com/201/200"
+  }
+];
 
EOF
)