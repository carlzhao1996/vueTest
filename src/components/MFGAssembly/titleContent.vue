<template>
    <div>
        <p v-for="(i,j) in content" :key="j">
            {{i}}
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            content:[
                '-  This rating process is not to be used to establish any manufacturing rate or level of support without the concurrence of the process owner.',
                '-  "AS WRITTEN", this is a tool for development and manufacturing engineering only. ',
                '-  This document does not procide visibility to the potential availability of parts for "TEST" builds, including SOVP during the SDV /SIT.',
                '-  The Rating is intended to be an indicator of the Fulfillment Centers ability to assemble, repair, test, and package a Personal Computer .',
                '-  The assembly operations required previously (by the shell vendor) are not specifically addressed and may impact a rating.',
                '-  Notice / For your awareness: When Rating comparisons are made between different products, \'keep in mind" that the higher function boxes',
                'will typically have a lower rating, as the rating is driven by such attributes as number of interconnects, and fasteners etc…',
                '-  When saving the file use the naming convention.  Product_Mechanical_Hardware level_Mfg Rating.   Ie:   Bird Big Sur P520 SIT Mfg Rating.xls'
            ]
        }
    }
}
</script>

<style lang="less">

</style>