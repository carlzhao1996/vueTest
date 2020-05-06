<template>
    <div class="Reviewers">
        <table class="reviewerTable">
            <tr>
                <td>REVIEWERS: </td>
                <td>STATUS: </td>
            </tr>
            <tr v-for="(tableItem,index) in tableData" :key="index">
                <td>{{tableItem.reviewers}}</td>
                <td>{{tableItem.status}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData:[
                {reviewers:"WW QE",status:"open"},
                {reviewers:"WW QE",status:"open"},
                {reviewers:"WW QE",status:"open"},
                {reviewers:"WW QE",status:"open"},
            ]
        }
    }
}
</script>

<style lang="less">
.Reviewers{
    margin-top:30px;
    margin-bottom: 30px;
    .reviewerTable{
        width: 800px;
        text-align: center;
    }
}
</style>