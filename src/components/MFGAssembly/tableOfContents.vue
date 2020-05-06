<template>
    <div class="tableOfContents">
        <p style="font-weight:bold;">MECHANICAL DESIGN MANUFACTURABILITY  RATING WORKSHEETS</p>
        <ol>
            <li v-for="(i,j) in worksheets" :key="j">{{i}}</li>
        </ol>
        <p style="font-weight:bold;">SUMMARY AND MISCELLANEOUS</p>
        <ul>
            <li v-for="(i,j) in summary" :key="j">{{i}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            worksheets:[
                'Box level assembly difficulty',
                'Box level interconnects',
                'Box level fasteners',
                'Fool proof assembly',
                'Process detection / parts identification',
                'Contamination / damage exposure',
                'Visual defect exposure',
                'Exception box level process / equipment',
                'Assembly Efficiency'
            ],
            summary:[
                'I.  Mfg. mechanical design ratings summary of results',
                'II. Variance "Drivers" summary',
                'III. Robust design checkpoints for mechanical MFG ratings review',
                'IV. Mfg. design rating attribute rational',
                'V. Last page of Document'
            ]
        }
    }
}
</script>

<style lang="less">
.tableOfContents{

}
</style>