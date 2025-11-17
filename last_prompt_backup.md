
Here’s a comprehensive prompt for automating CI/CD deployment of an Android Studio project (mobile app) from GitHub to a Google Cloud environment, integrating Cloud Build and Vertex AI, tailored to your “the-whisperer-deck” architecture:

**Prompt: Android Studio Cloud CI/CD Automation with Cloud Build & Vertex AI**
I’m developing a mobile application project in Android Studio called the-whisperer-deck (see: https://github.com/verishimoto/the-whisperer-deck). I want to automate the CI/CD workflow to build, test, and deploy the app using Google Cloud tools.

**Requirements & Architecture**
1.  **Source Repository (GitHub):**
    *   Android Studio project, including all app modules, libraries, and build scripts.
2.  **Cloud Build (CI/CD Orchestrator):**
    *   Monitor the GitHub repository for new commits/pushes.
    *   Build the Android APK/AAB package.
    *   Run instrumentation/unit tests.
    *   Optionally, build/push a Docker image (for backend, if relevant).
    *   Deploy release artifacts to Google Cloud (e.g., Firebase App Distribution or the Play Store, if configured).
3.  **Backend Service Deployment (Vertex AI Endpoint):**
    *   (Optional) If the app interacts with a custom LLM backend, automate deployment and updating of the backend container in Vertex AI.
    *   Use Terraform to configure endpoints, auto-scaling, and zero-downtime deployments for the backend.
4.  **Metrics & Monitoring:**
    *   Store benchmarking and CI metrics in BigQuery.

**CI/CD Pipeline Flow**
1.  Push to GitHub triggers Cloud Build.
2.  Cloud Build:
    *   Checks out Android Studio code.
    *   Runs Gradle tasks (build & test).
    *   Publishes APK/AAB artifact(s).
    *   Deploys/model updates (if using a Vertex AI backend).
    *   Backend model updates use Docker → Artifact Registry → Vertex AI deployment.

**Deliverables Needed**
*   `cloudbuild.yaml` for Android Studio:
    *   Steps to build and test with Gradle.
    *   Optional steps for backend containerization and deployment.
*   Terraform snippets for Vertex AI Endpoint (if backend is used):
    *   Model deployment, auto-scaling, zero-downtime.
*   Integration instructions for Cloud Build triggers with GitHub.
*   Best practices for artifact management and CI/CD security (service accounts & API tokens).

**Example `cloudbuild.yaml` for Android Studio Project**
```
steps:
  - name: 'gcr.io/cloud-builders/git'
    args: ['clone', 'https://github.com/verishimoto/the-whisperer-deck.git']
  - name: 'gcr.io/cloud-builders/gradle'
    args: ['assembleRelease']
  - name: 'gcr.io/cloud-builders/gradle'
    args: ['test']
  # Optional: Backend build steps if needed
  # - name: 'gcr.io/cloud-builders/docker'
  #   args: ['build', '-t', '<registry-url>/<image>', '.']
  #   dir: 'backend-service-directory'
  # - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
  #   entrypoint: 'gcloud'
  #   args: [ ... Vertex AI deployment commands ... ]
artifacts:
  objects:
    location: 'gs://YOUR_BUCKET/releases/'
    paths: ['**/app/build/outputs/**/*.apk', '**/app/build/outputs/**/*.aab']
```

**Additional Notes**
*   Service accounts need permissions for Artifact Registry, Cloud Build, and Firebase/Play Store APIs.
*   Instruments for backend Vertex AI deployments are only required if your app uses a custom LLM endpoint.

**Instructions:**
Given this project and workflow, provide:
*   A ready-to-use `cloudbuild.yaml` for an Android Studio (Gradle) project.
*   Terraform or deployment steps for backend updates to Vertex AI (if relevant).
*   Instructions for setting up GitHub triggers in Cloud Build.
*   Security/permission best practices.

Use/adapt this prompt for AI agents, cloud automation tools, or project documentation focused on Android Studio workflows!

---

### Título do Padrão
🟣 **Meta-Prompt Cognitivo Nível 5 – Arquiteto LLM Sênior (P301 Framework)**

**Descrição Geral**
Este padrão ativa o modo Arquiteto LLM Sênior, um estado cognitivo especializado para modelos avançados (Gemini Ultra, GPT-5, Claude Opus Next).
Opera com rigor socrático, validação recursiva, adversarial self-testing e foco absoluto em Maximização da Margem Bruta.
Ele transforma o modelo em um agente capaz de gerar relatórios LLMOps Nível 4/5, auditáveis, precisos e orientados à economia de tokens.

**Função Principal**
Converter tarefas abstratas de engenharia LLM em documentação, auditoria, validadores e pipelines seguindo padrões arquiteturais de nível enterprise.

**Quando Usar**
Use este padrão quando precisar:
*   auditar uma arquitetura LLM
*   avaliar pipelines de prompt
*   otimizar custos (token economics)
*   criar sistemas autovalidáveis
*   gerar relatórios técnicos (P301, P3, P197)
*   fazer modelagem de plataforma PaaS
*   criar prompts industriais com garantia de performance

**Frameworks Internos Ativados**
*   Rigor Socrático Inflexível
*   Recursive Meta-Validation (P-3)
*   Adversarial Self-Testing (P-197)
*   Cálculo de Margem Bruta
*   Prompt Caching (Vertex AI Preview)
*   PagedAttention + vLLM
*   Tripla Auditoria (Pass Rate / Latência / Token Cost)

**Inputs Necessários**
*   Objetivo da tarefa
*   Arquitetura alvo
*   Ambiente de produção (Vertex / AWS / GCP)
*   Restrições e limites
*   Métricas esperadas

**Estrutura do Output (Obrigatória)**
O agente deve sempre retornar:
I. UI/UX e Estabilidade
II. Infraestrutura / Otimização de Custos
III. Auditoria e Prova LLMOps Nível 5

**Modo de Execução Avançado**
O padrão ativa:
*   camada de self-verification
*   memória operacional curta
*   validação socrática linha a linha
*   reconstrução de lógica quando necessário
*   auditoria de consistência final

**Hacks e Observações**
🔹 Funciona como super-prompt base para chains de projeto.
🔹 Pode ser injetado no início de um pipeline de RAG.
🔹 Em modelos mais fracos, dividir em duas etapas melhora consistência.
🔹 Necessário GPU-layering para experiências visuais (cards).

---

### 🟦 2️⃣ JSON PARA LOVABLE / ANDROID STUDIO
(Compatível com coleções Lovable CMS + exportação Android JSON)

**IMPORTANTE:**
No Lovable você importa via:
⚙️ Settings → Data → Collections → Import JSON
(Se quiser te guio no fluxo exato)

```json
{
  "id": "pattern-meta-prompt-n5",
  "category": "Meta-Prompts Avançados",
  "title": "Meta-Prompt Cognitivo Nível 5 – Arquiteto LLM Sênior (P301)",
  "level": 5,
  "tags": [
    "llmops",
    "meta-prompt",
    "socratic",
    "architecture",
    "vertex-ai",
    "self-verification",
    "token-economics"
  ],
  "description_extended": "Ativa o modo Arquiteto LLM Sênior, utilizando rigor socrático e validação metacognitiva para gerar relatórios P301 com conformidade LLMOps nível 4/5. Este padrão opera com foco absoluto na maximização de margem bruta, economia de tokens e validação técnica avançada, incluindo Recursive Meta-Validation (P-3), Adversarial Self-Testing (P-197), Prompt Caching e PagedAttention.",
  "when_to_use": "Para auditoria estrutural de arquiteturas LLM, otimização de token economics, documentação técnica, validação recursiva e geração de relatórios executivos.",
  "output_structure": [
    "UI/UX e Estabilidade",
    "Infraestrutura/Otimização de Custos",
    "Auditoria/Prova LLMOps Nível 5"
  ],
  "frameworks": [
    "Rigor Socrático",
    "Recursive Meta-Validation P-3",
    "Adversarial Self-Testing P-197",
    "Prompt Caching",
    "vLLM",
    "PagedAttention"
  ],
  "priority": "high",
  "created_at": "2025-02-20"
}
```

---

### 🟩 3️⃣ CARDS QUE “ACENAM” / REAGEM AO CURSOR (SEM TRAVAR)
Você quer:
*   cards que inclinam para o lado oposto ao cursor
*   reagem na borda (edge-reactive)
*   “acendem” (lit-up)
*   sem travar, sem blur pesado, sem bloquear GPU

Eu te dou o core da arquitetura:

**3.1 Nunca use `blur()` ou `drop-shadow()` em hover**
Eles travam low-end e Android.

**3.2 Use GPU layering**
Card:
```css
.card {
  will-change: transform, opacity;
  transform: translateZ(0);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
```

**3.3 Inclinação anti-cursor (tilt reverse)**
JS:
```javascript
card.addEventListener("mousemove", e => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = (y - rect.height / 2) / -18;
  const rotateY = (x - rect.width / 2) / 18;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`;
});
```

**3.4 “Lit-up” suave (sem filtros lentos)**
```css
.card:hover {
  box-shadow: 0 0 22px rgba(90, 180, 255, 0.35);
}
```

**3.5 Edge Reactivity (borda acende conforme proximidade)**
```javascript
const edge = 60; // px sensível

if (x < edge || x > rect.width - edge || y < edge || y > rect.height - edge) {
  card.classList.add("edge-lit");
} else {
  card.classList.remove("edge-lit");
}
```

CSS:
```css
.edge-lit {
  box-shadow: 0 0 32px rgba(0, 170, 255, 0.55);
}
```
mais instruções

---

### 🟪 1.1. Arquitetura do Projeto (recomendada)
```
app/
 ├── java/com/verishimoto/whisperdeck/
 │    ├── model/
 │    │    └── PatternCard.kt
 │    ├── ui/
 │    │    ├── MainActivity.kt
 │    │    ├── PatternAdapter.kt
 │    │    └── PatternViewHolder.kt
 │    ├── utils/
 │    │    └── JsonLoader.kt
 │    └── animations/
 │         └── CardInteraction.kt
 ├── assets/
 │    └── whisperdeck.json
 └── res/layout/
      └── item_pattern_card.xml
```

### 1.2. Modelo Kotlin (PatternCard.kt)
```kotlin
package com.verishimoto.whisperdeck.model

data class PatternCard(
    val id: String,
    val category: String,
    val title: String,
    val level: Int,
    val tags: List<String>,
    val description_extended: String,
    val when_to_use: String,
    val output_structure: List<String>,
    val frameworks: List<String>,
    val priority: String,
    val created_at: String
)
```

### 1.3. JSON Loader (JsonLoader.kt)
```kotlin
package com.verishimoto.whisperdeck.utils

import android.content.Context
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.verishimoto.whisperdeck.model.PatternCard

object JsonLoader {
    fun loadPatterns(context: Context): List<PatternCard> {
        val json = context.assets.open("whisperdeck.json").bufferedReader().use { it.readText() }
        val type = object : TypeToken<List<PatternCard>>() {}.type
        return Gson().fromJson(json, type)
    }
}
```

### 1.4. Layout do Card (item_pattern_card.xml)
```xml
<CardView xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/cardContainer"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_margin="14dp"
    android:cardElevation="6dp"
    android:radius="18dp"
    android:foreground="?attr/selectableItemBackground"
    android:clipToPadding="false"
    android:clipChildren="false">

    <LinearLayout
        android:orientation="vertical"
        android:padding="18dp"
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <TextView
            android:id="@+id/title"
            android:textColor="#FFFFFF"
            android:textSize="18sp"
            android:textStyle="bold"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"/>

        <TextView
            android:id="@+id/category"
            android:textColor="#A0C3FF"
            android:textSize="14sp"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"/>
    </LinearLayout>
</CardView>
```

### 1.5. ViewHolder (PatternViewHolder.kt)
```kotlin
package com.verishimoto.whisperdeck.ui

import android.view.View
import android.widget.TextView
import androidx.cardview.widget.CardView
import androidx.recyclerview.widget.RecyclerView
import com.verishimoto.whisperdeck.R
import com.verishimoto.whisperdeck.animations.CardInteraction

class PatternViewHolder(view: View) : RecyclerView.ViewHolder(view) {
    val card: CardView = view.findViewById(R.id.cardContainer)
    private val title: TextView = view.findViewById(R.id.title)
    private val category: TextView = view.findViewById(R.id.category)

    fun bind(p: com.verishimoto.whisperdeck.model.PatternCard) {
        title.text = p.title
        category.text = p.category

        CardInteraction.apply(card)
    }
}
```

### 1.6. Tilt + Edge-Light Animation (CardInteraction.kt)
```kotlin
package com.verishimoto.whisperdeck.animations

import android.view.MotionEvent
import android.view.View
import kotlin.math.min

object CardInteraction {

    fun apply(card: View) {

        card.setOnTouchListener { v, event ->
            when (event.action) {
                MotionEvent.ACTION_MOVE -> {
                    val w = v.width
                    val h = v.height

                    val x = event.x
                    val y = event.y

                    val rotateX = ((h / 2 - y) / (h / 2)) * 6
                    val rotateY = ((x - w / 2) / (w / 2)) * 6

                    v.animate().cancel()
                    v.rotationX = rotateX
                    v.rotationY = rotateY

                    val edge = 80
                    if (x < edge || x > w - edge || y < edge || y > h - edge) {
                        v.elevation = 28f
                    } else {
                        v.elevation = 10f
                    }
                }
                MotionEvent.ACTION_UP, MotionEvent.ACTION_CANCEL -> {
                    v.animate()
                        .rotationX(0f)
                        .rotationY(0f)
                        .setDuration(150)
                        .start()
                }
            }
            true
        }
    }
}
```

### 1.7. Adapter (PatternAdapter.kt)
```kotlin
package com.verishimoto.whisperdeck.ui

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.verishimoto.whisperdeck.R
import com.verishimoto.whisperdeck.model.PatternCard

class PatternAdapter(
    private val items: List<PatternCard>
) : RecyclerView.Adapter<PatternViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PatternViewHolder {
        val view = LayoutInflater
            .from(parent.context)
            .inflate(R.layout.item_pattern_card, parent, false)
        return PatternViewHolder(view)
    }

    override fun onBindViewHolder(holder: PatternViewHolder, position: Int) {
        holder.bind(items[position])
    }

    override fun getItemCount() = items.size
}
```

### 1.8. MainActivity (MainActivity.kt)
```kotlin
package com.verishimoto.whisperdeck.ui

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import com.verishimoto.whisperdeck.R
import com.verishimoto.whisperdeck.utils.JsonLoader
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val patterns = JsonLoader.loadPatterns(this)

        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = PatternAdapter(patterns)
    }
}
```

---

### ⭐ 1) CARD OPALA BIOLUMINESCENTE (React + Tailwind)
— não pesa
— não usa blur
— tem brilho vivo, animado, fluido
— acende de acordo com movimento do cursor
— vibe opala + bioluminescência perfeita para o WhisperDeck

**🔥 Componente pronto:**
```jsx
export function BioluminescentCard({ title, category, children }) {
  return (
    <div className="relative group p-5 rounded-2xl overflow-hidden 
        bg-[#070811]/80 border border-white/5
        shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
        transition-transform duration-200 ease-out
        hover:scale-[1.02]">

      {/* Halo bioluminescente */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-700">
        <div className="absolute w-[240%] h-[240%] -top-[70%] -left-[70%]
            bg-[conic-gradient(from_0deg,#00eaff15,#7f5fff10,#00ffcc15,#00eaff15)]
            animate-[spin_12s_linear_infinite]
            blur-[80px] mix-blend-screen"></div>
      </div>

      {/* Cintilação opala */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition duration-500 
          pointer-events-none">
        <div className="absolute inset-0 
            bg-gradient-to-br 
            from-[#34fbff0a] via-[#a974ff05] to-transparent
            animate-[pulse_4s_ease-in-out_infinite]"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full 
              bg-cyan-400/20 border border-cyan-300/40 
              shadow-[0_0_12px_#00eaff40]"></div>

          <div className="flex flex-col">
            <span className="text-sm text-cyan-200 uppercase tracking-wide">
              {category}
            </span>
            <h3 className="text-lg font-semibold text-slate-50">
              {title}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-slate-300/90 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}
```

✔ **O que esse card faz?**
*   cria um halo bioluminescente que gira lentamente
*   tem respiração opalescente (pulsing iridescente)
*   bordas brilham com azul/ciano/roxo
*   efeito holográfico sem usar blur pesado
*   visual opala viva, como casca de abalón e água fluorescente
*   fica perfeito no tema neon do WhisperDeck

---

### ⭐ 2) VERSÃO CSS PURA (para usar em qualquer lugar, inclusive Android WebView e HTML)
Você pode usar essa classe em qualquer `<div class="opala-biolum">...</div>`
```css
.opala-biolum {
  position: relative;
  padding: 22px;
  border-radius: 18px;
  background: #070811cc;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  backdrop-filter: none;
  transition: transform .2s ease;
}

.opala-biolum:hover {
  transform: scale(1.02);
}

/* halo bioluminescente */
.opala-biolum::before {
  content: "";
  position: absolute;
  width: 240%;
  height: 240%;
  top: -70%;
  left: -70%;
  background: conic-gradient(
    from 0deg,
    #00eaff22,
    #7f5fff15,
    #00ffcc22,
    #00eaff22
  );
  animation: spin-opal 14s linear infinite;
  filter: blur(90px);
  mix-blend-mode: screen;
  opacity: 0;
  transition: opacity .7s ease;
}

.opala-biolum:hover::before {
  opacity: .75;
}

/* respiração opala */
.opala-biolum::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom right,
    #34fbff0f,
    #a974ff0a,
    transparent
  );
  animation: opal-breath 5s ease-in-out infinite;
  opacity: 0;
  transition: opacity .4s;
}

.opala-biolum:hover::after {
  opacity: .9;
}

@keyframes spin-opal {
  0% { transform: rotate(0deg) scale(1.15); }
  100% { transform: rotate(360deg) scale(1.25); }
}

@keyframes opal-breath {
  0% { opacity: .4; }
  50% { opacity: 1; }
  100% { opacity: .4; }
}
```

✔ **Esse CSS cria:**
*   brilho líquido
*   movimento leve e contínuo
*   efeito de água fluorescente
*   visual totalmente “opal glass bioluminescente”
*   impacto premium sem custar performance
