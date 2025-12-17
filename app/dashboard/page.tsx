"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WelcomeGreeting from "@/components/dashboard/welcome-greeting"
import VideosGrid from "@/components/dashboard/videos-grid"
import QuizGrid from "@/components/dashboard/quiz-grid"
import VotingSection from "@/components/dashboard/voting-section"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
      <WelcomeGreeting />

      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8">
          <TabsTrigger value="videos" className="text-xs md:text-sm">
            Videos
          </TabsTrigger>
          <TabsTrigger value="quizzes" className="text-xs md:text-sm">
            Quizzes
          </TabsTrigger>
          <TabsTrigger value="voting" className="text-xs md:text-sm">
            Voting
          </TabsTrigger>
        </TabsList>

        <TabsContent value="videos" className="space-y-4 md:space-y-6">
          <VideosGrid />
        </TabsContent>

        <TabsContent value="quizzes" className="space-y-4 md:space-y-6">
          <QuizGrid />
        </TabsContent>

        <TabsContent value="voting" className="space-y-4 md:space-y-6">
          <VotingSection />
        </TabsContent>
      </Tabs>
    </div>
  )
}
