<template>
    <div >
    <ChartCard />
    <CardWidget />
    <ListChart />
    <TaskList />
    <GlobalSalesMap />
    </div>

</template>

<script>
import ChartCard from '@/components/ChartCard.vue';
import CardWidget from '@/components/CardWidget.vue';
import ListChart from '@/components/ListChart.vue';
import TaskList from '@/components/TaskList.vue';
import GlobalSalesMap from '@/components/GlobalSalesMap.vue'

export default {
    name: "DashboardPage",
    components: {
        ChartCard,
        CardWidget,
        ListChart,
        TaskList,
        GlobalSalesMap,
    }
}
</script>