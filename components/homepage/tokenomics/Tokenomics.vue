<template>
  <div class="relative bg-wd-background-red py-20">
    <div class="max-w-6xl mx-auto">
      <h2 class="font-black text-4xl md:text-5xl lg:text-7xl text-white text-center w-3/4 m-auto">Tokenomics</h2>
      <div class="m-auto px-6 md:px-0 mx-10 mt-10">
        <img src="@/assets/images/homepage/wodo_token.svg" class="w-64 m-auto" alt="wodo token">
      </div>
      <div class="m-auto md:px-0 mx-10 mt-10 flex justify-between">
        <div class="w-full hidden lg:block">
          <chart class="mx-8"/>
        </div>
        <div class="pie_chart_legends text-white font-inter w-full">
          <div class="total_tokens font-bold text-2xl mb-4">Total: 1.000.000.000</div>
          <div class="token_distributions font-bold space-y-5">
            <div class="token_distribution_item space-y-2">
              <div class="token_allocation_title">
                Play to earn: 20%
              </div>
              <div class="token_allocation_content">
                <div class="token_allocation_bar color1"></div>
              </div>
            </div>
            <div class="token_distribution_item space-y-2">
              <div class="token_allocation_title">
                Company Reserve: 27%
              </div>
              <div class="token_allocation_content">
                <div class="token_allocation_bar color2"></div>
              </div>
            </div>

            <div class="token_distribution_item space-y-2">
              <div class="token_allocation_title">
                Team: 15%
              </div>
              <div class="token_allocation_content">
                <div class="token_allocation_bar color3"></div>
              </div>
            </div>
            <div class="token_distribution_item space-y-2">
              <div class="token_allocation_title">
                Advisors: 2%
              </div>
              <div class="token_allocation_content">
                <div class="token_allocation_bar color4"></div>
              </div>
            </div>
            <div class="token_distribution_item space-y-2">
              <div class="token_allocation_title">
                Private sale: 1%
              </div>
              <div class="token_allocation_content">
                <div class="token_allocation_bar color5"></div>
              </div>
            </div>
            <div class="token_distribution_item space-y-2">
              <div class="token_allocation_title">
                IDO: 6%
              </div>
              <div class="token_allocation_content">
                <div class="token_allocation_bar color6"></div>
              </div>
            </div>
            <div class="token_distribution_item space-y-2">
              <div class="token_allocation_title">
                ICO: 6%
              </div>
              <div class="token_allocation_content">
                <div class="token_allocation_bar color7"></div>
              </div>
            </div>
            <div class="token_distribution_item space-y-2">
              <div class="token_allocation_title">
                Marketing & Social media: 12%
              </div>
              <div class="token_allocation_content">
                <div class="token_allocation_bar color8"></div>
              </div>
            </div>
            <div class="token_distribution_item space-y-2">
              <div class="token_allocation_title">
                Liquidity pool: 10%
              </div>
              <div class="token_allocation_content">
                <div class="token_allocation_bar color9"></div>
              </div>
            </div>
            <div class="token_distribution_item space-y-2">
              <div class="token_allocation_title">
                Airdrop: 1%
              </div>
              <div class="token_allocation_content">
                <div class="token_allocation_bar color10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Chart from "@/components/homepage/tokenomics/chart.vue";
export default {
  components: {Chart}
}
</script>
