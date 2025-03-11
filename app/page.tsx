import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { AlertTriangle, Brain, HelpCircle, MessageSquare, Shield, FileText, Info, Upload, Zap } from "lucide-react"
import { ScrollTrigger } from "@/components/scroll-trigger"
import { TypeAnimation } from "@/components/type-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary animate-pulse-slow" />
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Anti-Manipulation Assistant</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <HelpCircle className="mr-2 h-4 w-4" />
                Aiuto
              </Button>
              <Button variant="outline" size="sm">
                Risorse
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-fade-in">
            Riconosci e Previeni la Manipolazione Psicologica
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto animate-slide-in-up animate-delay-200">
            Uno strumento basato sull&apos;intelligenza artificiale per aiutarti a identificare tecniche manipolative e
            proteggere la tua autonomia psicologica.
          </p>
        </section>

        <ScrollTrigger>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Cos&apos;è la Manipolazione Psicologica?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                La manipolazione psicologica è un insieme di tecniche utilizzate per influenzare il pensiero, il
                comportamento e le decisioni di una persona, spesso a sua insaputa e a vantaggio del manipolatore.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Queste tecniche possono includere il gaslighting, il controllo emotivo, l&apos;isolamento sociale, la
                creazione di dipendenza emotiva e altre strategie che minano l&apos;autonomia e il benessere
                psicologico.
              </p>
              <div className="flex items-center p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-md">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                <p className="text-amber-800 dark:text-amber-300 text-sm">
                  La manipolazione può verificarsi in qualsiasi tipo di relazione: personale, professionale, religiosa o
                  sociale.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Come Può Aiutarti Questo Strumento
              </h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                  <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                  <span>Analizzare le tue conversazioni per identificare potenziali dinamiche manipolative</span>
                </li>
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                  <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                  <span>
                    Aiutarti a comprendere situazioni che ti fanno sentire a disagio ma che non riesci a definire
                  </span>
                </li>
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                  <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                  <span>Fornire strategie per proteggere la tua autonomia psicologica</span>
                </li>
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                  <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                  <span>Offrire risorse educative sulla manipolazione e come contrastarla</span>
                </li>
              </ul>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              Come Utilizzare l&apos;Assistente Anti-Manipolazione
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="transition-all duration-300 hover:shadow-lg animate-slide-in-up animate-delay-100">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Parla Direttamente</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-center">
                    Descrivi la tua situazione o i comportamenti che ti preoccupano. Non devi sapere cosa è
                    manipolativo.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg animate-slide-in-up animate-delay-200">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Upload className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Condividi Conversazioni</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-center">
                    Carica o copia le conversazioni che ti fanno sentire a disagio per un'analisi dettagliata.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg animate-slide-in-up animate-delay-300">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Ricevi un'Analisi</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-center">
                    L'assistente analizzerà la situazione, identificando potenziali tecniche manipolative.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg animate-slide-in-up animate-delay-400">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Ottieni Supporto</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-center">
                    Ricevi consigli e, se necessario, collegamenti a centri specializzati di supporto.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="mb-16">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Inizia a Chattare con l&apos;Assistente
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Puoi semplicemente descrivere la tua situazione con parole tue o condividere conversazioni che ti
                  preoccupano. Non è necessario sapere già quali comportamenti sono manipolativi. L'assistente è qui per
                  aiutarti a comprendere meglio le dinamiche relazionali e, quando necessario, metterti in contatto con
                  centri specializzati di supporto.
                </p>
                <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-lg flex flex-col items-center justify-center">
                  <MessageSquare className="h-12 w-12 text-slate-400 dark:text-slate-500 mb-4 animate-pulse-slow" />
                  <div className="text-slate-600 dark:text-slate-400 text-center mb-6 overflow-hidden">
                    <TypeAnimation text="Qui verrà integrato il chatbot intelligente. Potrai condividere le tue conversazioni e ricevere supporto personalizzato." />
                  </div>
                  <Button size="lg" className="w-full sm:w-auto transition-transform duration-300 hover:scale-105">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Avvia la Conversazione
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              Come Esportare le Tue Conversazioni
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600 dark:text-blue-400"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Facebook Messenger</h4>
                  <ol className="text-slate-600 dark:text-slate-400 text-sm space-y-2 list-decimal list-inside">
                    <li>Vai su Facebook e accedi al tuo account</li>
                    <li>Clicca sull&apos;icona delle impostazioni (in alto a destra)</li>
                    <li>
                      Seleziona &quot;Impostazioni e privacy&quot; &gt; &quot;Le tue informazioni su Facebook&quot;
                    </li>
                    <li>Clicca su &quot;Scarica le tue informazioni&quot;</li>
                    <li>Seleziona solo &quot;Messaggi&quot; e scegli il formato JSON</li>
                    <li>Clicca su &quot;Crea file&quot; e attendi l&apos;email di notifica</li>
                  </ol>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600 dark:text-green-400"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">WhatsApp</h4>
                  <ol className="text-slate-600 dark:text-slate-400 text-sm space-y-2 list-decimal list-inside">
                    <li>Apri WhatsApp sul tuo smartphone</li>
                    <li>Apri la chat che desideri esportare</li>
                    <li>Tocca i tre puntini in alto a destra</li>
                    <li>Seleziona &quot;Altro&quot; &gt; &quot;Esporta chat&quot;</li>
                    <li>Scegli &quot;Senza media&quot; per esportare solo i messaggi</li>
                    <li>Seleziona come condividere il file (email, cloud, ecc.)</li>
                  </ol>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600 dark:text-purple-400"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Instagram</h4>
                  <ol className="text-slate-600 dark:text-slate-400 text-sm space-y-2 list-decimal list-inside">
                    <li>Accedi a Instagram dal browser web</li>
                    <li>Vai al tuo profilo e clicca su &quot;Impostazioni&quot;</li>
                    <li>Seleziona &quot;Privacy e sicurezza&quot;</li>
                    <li>Scorri fino a &quot;Scarica i dati&quot; e clicca</li>
                    <li>Inserisci la tua email e password</li>
                    <li>Riceverai un link per scaricare i tuoi dati, inclusi i messaggi</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 text-center">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Una volta esportate, puoi caricare le conversazioni direttamente nel chatbot o copiare e incollare le
                parti rilevanti.
              </p>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              Tecniche Manipolative che l&apos;Assistente Può Aiutarti a Identificare
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-medium mb-2">Gaslighting</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Far dubitare una persona della propria percezione della realtà, negando eventi accaduti o
                    distorcendo i fatti per farla sentire confusa o instabile.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-medium mb-2">Isolamento Sociale</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Allontanare gradualmente una persona dalle sue relazioni di supporto, come amici e familiari, per
                    aumentare la dipendenza dal manipolatore.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-medium mb-2">Controllo Emotivo</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Utilizzare emozioni come la paura, il senso di colpa o la vergogna per influenzare il comportamento
                    e le decisioni di una persona.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-medium mb-2">Love Bombing</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Sommergere una persona di attenzioni eccessive e affetto nelle prime fasi di una relazione, per poi
                    ritirarlo strategicamente e creare dipendenza emotiva.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              Come Funziona il Nostro Strumento
            </h3>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-medium text-slate-900 dark:text-white mb-4 flex items-center">
                    <Zap className="h-5 w-5 text-primary mr-2" />
                    Tecnologie di Intelligenza Artificiale
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Il nostro assistente utilizza modelli avanzati di intelligenza artificiale per analizzare le
                    conversazioni e identificare pattern linguistici e comportamentali che potrebbero indicare
                    manipolazione psicologica.
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <span>
                        <strong>Modelli di Linguaggio Naturale:</strong> Comprendono il contesto e le sfumature delle
                        conversazioni
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <span>
                        <strong>Reti Neurali:</strong> Identificano pattern complessi basati su migliaia di esempi di
                        manipolazione
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <span>
                        <strong>Apprendimento Continuo:</strong> Il sistema migliora costantemente la sua capacità di
                        riconoscimento
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-slate-900 dark:text-white mb-4 flex items-center">
                    <Brain className="h-5 w-5 text-primary mr-2" />
                    Tecniche di Analisi Avanzate
                  </h4>
                  <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                    <li>
                      <h5 className="font-medium">Analisi del Sentiment</h5>
                      <p className="text-slate-600 dark:text-slate-400">
                        Identifica il tono emotivo delle conversazioni, rilevando cambiamenti sottili che potrebbero
                        indicare manipolazione emotiva o pressione psicologica.
                      </p>
                    </li>
                    <li>
                      <h5 className="font-medium">Comprensione Semantica</h5>
                      <p className="text-slate-600 dark:text-slate-400">
                        Va oltre le singole parole per comprendere il significato contestuale e le implicazioni nascoste
                        nei messaggi.
                      </p>
                    </li>
                    <li>
                      <h5 className="font-medium">Riconoscimento di Pattern</h5>
                      <p className="text-slate-600 dark:text-slate-400">
                        Identifica schemi ricorrenti di comportamento linguistico associati a tecniche manipolative
                        specifiche come il gaslighting o la colpevolizzazione.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2 flex items-center">
                  <Info className="h-5 w-5 text-primary mr-2" />
                  Privacy e Sicurezza
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Tutte le conversazioni analizzate sono trattate con la massima riservatezza. I dati vengono elaborati
                  in modo sicuro e non vengono conservati più a lungo del necessario. La tua privacy è la nostra
                  priorità.
                </p>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="mb-16">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-800">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <HelpCircle className="h-6 w-6 text-primary mr-3" />
                Supporto Specializzato
              </h3>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  In situazioni particolarmente complesse o che richiedono un intervento professionale, l'assistente può
                  metterti in contatto con centri specializzati e professionisti qualificati.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Supporto Psicologico</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Collegamento con psicologi e terapeuti specializzati in dinamiche relazionali e recupero da
                      relazioni manipolative.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Centri Antiviolenza</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      In caso di situazioni che coinvolgono abusi o violenza, collegamento immediato con centri
                      antiviolenza e servizi di emergenza.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Gruppi di Supporto</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Informazioni su gruppi di supporto locali e online per persone che hanno vissuto esperienze
                      simili.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Consulenza Legale</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Quando necessario, informazioni su servizi di consulenza legale per situazioni che richiedono
                      interventi a livello giuridico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="mb-16">
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Privacy e Considerazioni Etiche
              </h3>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  Questo strumento è progettato per essere un supporto educativo e informativo, non sostituisce la
                  consulenza professionale di psicologi, terapeuti o altri professionisti della salute mentale.
                </p>
                <p>
                  Le tue conversazioni con l&apos;assistente sono private e i dati vengono trattati con la massima
                  riservatezza. Non condividiamo le tue informazioni con terze parti.
                </p>
                <p>
                  In caso di situazioni di abuso o pericolo immediato, ti incoraggiamo a contattare le autorità
                  competenti o i servizi di supporto specializzati.
                </p>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              Risorse Aggiuntive
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-medium mb-2">Linee di Supporto</h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="transition-colors duration-300 hover:text-primary">
                      <Link href="#" className="text-primary hover:underline flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Telefono Amico Italia: 199 284 284
                      </Link>
                    </li>
                    <li className="transition-colors duration-300 hover:text-primary">
                      <Link href="#" className="text-primary hover:underline flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Centro Antiviolenza: 1522
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-medium mb-2">Letture Consigliate</h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="transition-colors duration-300 hover:text-primary">
                      <Link href="#" className="text-primary hover:underline flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        "Manipolatori e Manipolati" di Isabelle Nazare-Aga
                      </Link>
                    </li>
                    <li className="transition-colors duration-300 hover:text-primary">
                      <Link href="#" className="text-primary hover:underline flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        "Il Potere di Manipolazione" di George K. Simon
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-medium mb-2">Associazioni</h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="transition-colors duration-300 hover:text-primary">
                      <Link href="#" className="text-primary hover:underline flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Associazione Italiana di Psicologia
                      </Link>
                    </li>
                    <li className="transition-colors duration-300 hover:text-primary">
                      <Link href="#" className="text-primary hover:underline flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Centro Italiano per lo Studio delle Manipolazioni Psicologiche
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollTrigger>
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-primary animate-pulse-slow" />
              <span className="text-slate-900 dark:text-white font-medium">Anti-Manipulation Assistant</span>
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Progetto di Tesi - Tutti i diritti riservati
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

