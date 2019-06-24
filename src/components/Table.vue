<template>
    <div v-if="item.tabref.length" class="">

        <div v-for="ref in item.tabref" :key="item.tabref.id">

            <v-collapse-wrapper :active="isActive">

                <div class="mt-3 header flex flex-row w-full cursor-pointer text-sm whitespace-no-wrap" v-collapse-toggle>
                    <i class="fas fa-table text-xl text-gray-dark mr-2"></i>Tabell {{ref.navn}}:<span class="ml-2 text-gray-dark whitespace-normal">{{ref.tekst}}</span>
                </div>

                <div class="pb-0 mb-0" v-collapse-content>

                    <div class="overflow-x-auto overflow-y-auto">

                        <table v-bind:id="'table-'+item.id" v-if="ref.lineref" class="w-full text-xs mt-2">
                            <template v-for="(line, part) in tabledata(ref)"
                                      class="border-collapse border">
                                <thead v-if="part==='head'">
                                    <tr>
                                        <th v-for="title in line" class="border text-center align-top p-1 bg-gray-dark text-white" v-html="formattedTitle(title)"></th>
                                    </tr>
                                </thead>
                                <tbody v-else>
                                    <tr v-for="row in line">
                                        <td v-for="cell in row" class="border bg-gray-bg border-white p-1" v-bind:data-col="cell.coltitle">{{cell.value}}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </table>
                        <div v-if="ref.beskrivelse" v-html="compiledMarkdown(ref)"></div>
                    </div>

                </div>
            </v-collapse-wrapper>

        </div>
    </div>
</template>


<script>

    import marked from "marked";
    //import fsm from "/js/fsm.js";

    export default {
        name: 'Table',
        props: ['item', 'name', 'isActive'],
        components: {
            marked,
        },

        methods: {
            tabledata: function(ref){
                let table = { 'head': [], 'rows': [], };
                let col = -1;
                let row = 0;
                table.head.push(ref.legend);
                ref.lineref.forEach(function(line){
                    if(line.coltitle !== table.head[col+1]) {
                        table.head.push(line.coltitle);
                        col++;
                        row=0;
                    }
                    if(col===0) { table.rows.push([{ 'value': line.rowtitle, 'coltitle':ref.legend }]); };
                    //console.log('Rad '+row+' val: '+line.value)
                    table.rows[row++].push({ 'value': line.value, 'coltitle':line.coltitle });
                });
                return table;
            },
            compiledMarkdown: function (ref) {
                return marked(ref.beskrivelse, {sanitize: true})
                    .replace(/<p>/g, '<p class="my-2">')
                    .replace(/<a href/g, '<a class="underline font-medium" href')
            },
            formattedTitle: function (title) {
                return marked(title, {sanitize: true});
            }
        },

    };
</script>


<style scoped>

</style>