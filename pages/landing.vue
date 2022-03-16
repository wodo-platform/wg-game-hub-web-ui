<template>
  <div class="mt-8">
    <div class="max-w-7xl mx-auto">
      <LogoIcon class="m-auto w-36 h-auto"/>
    </div>
    <WelcomeCarpet class="w-full m-auto pt-20"/>
    <OurPlatform/>
    <MultiplayerCollection/>
    <DevelopYourGame/>
    <JoinOurCommunity/>
    <GameHub/>
    <Wodolet/>
    <Tokenomics/>
    <Team/>
    <Roadmap/>
    <NewsletterSection/>
  </div>
</template>

<script>
import LogoIcon from "@/components/images/LogoIcon";
import WelcomeCarpet from "@/components/homepage/WelcomeCarpet";
import OurPlatform from "@/components/homepage/OurPlatform.vue";
import MultiplayerCollection from "@/components/homepage/MultiplayerCollection.vue";
import DevelopYourGame from "@/components/homepage/DevelopYourGame.vue";
import JoinOurCommunity from "@/components/homepage/JoinOurCommunity.vue";
import GameHub from "@/components/homepage/GameHub.vue";
import Wodolet from "@/components/homepage/Wodolet.vue";
import Tokenomics from "@/components/homepage/tokenomics/Tokenomics.vue";
import Team from "@/components/homepage/Team.vue";
import Roadmap from "@/components/homepage/Roadmap.vue";
import NewsletterSection from "@/components/homepage/NewsletterSection.vue";

export default {
  name: 'IndexPage',
  layout: 'landing',
  components: {
    NewsletterSection,
    Roadmap,
    Team,
    Tokenomics,
    Wodolet,
    GameHub,
    JoinOurCommunity,
    DevelopYourGame,
    MultiplayerCollection,
    OurPlatform,
    WelcomeCarpet,
    LogoIcon
  }
}
</script>
