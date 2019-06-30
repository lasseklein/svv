<template>
    <div v-if="item.tabref.length">
        <v-collapse-group :onlyOneActive="false">
            <div v-for="tabell in item.tabref" :key="item.tabref.id">

                <v-collapse-wrapper :active="isActive" v-bind:class="{'tw-mt-6':isTextField}">
                    <div class="tw-mt-3 tw-header tw-flex tw-flex-row tw-w-full tw-cursor-pointer tw-text-sm tw-whitespace-no-wrap"
                         v-bind:class="{'mt-8':isActive}"
                         v-collapse-toggle
                    >
                        <i class="fas fa-table tw-text-xl tw-text-gray-dark tw-mr-2"></i>
                        Tabell {{tabell.navn}}:
                        <span class="tw-ml-2 tw-text-gray-dark tw-whitespace-normal">{{tabell.tekst}}</span>
                    </div>
                    <div class="tw-pb-0 tw-mb-0" v-collapse-content>
                        <div class="tw-overflow-x-auto tw-overflow-y-auto">
                            <table v-if="tabell.lineref.length" v-bind:id="'table-'+item.id" class="tw-w-full tw-text-xs mt-2">
                                <template v-for="(line, part) in tabledata(tabell)"
                                          class="tw-border-collapse tw-border">
                                    <thead v-if="part==='head'">
                                        <tr>
                                            <th v-for="title in line"
                                                class="tw-border tw-text-center tw-align-top tw-p-1 tw-bg-gray-dark tw-text-white"
                                                v-html="formattedTitle(title)">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody v-else>
                                        <tr v-for="row in line">
                                            <td v-for="cell in row" class="tw-border tw-bg-gray-bg tw-border-white tw-p-1"
                                                v-bind:data-col="cell.coltitle">
                                                {{cell.value}}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </table>

                            <div v-else class="tw-mt-4">
                                <img v-bind:src="tabell.bilde[0].url">
                            </div>
                        </div>
                        <Markdown v-bind:text="tabell.beskrivelse" />
                    </div>
                </v-collapse-wrapper>

            </div>
        </v-collapse-group>
    </div>
</template>


<script>

    import marked from "marked";
    import Markdown from "./Markdown";

    export default {
        name: 'Table',
        props: ['item', 'name', 'isActive', 'isTextField'],
        components: {
            marked,
            Markdown,
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
                    console.log('col:'+col+' row:'+row+' - '+line.rowtitle);
                    if(col===0) { table.rows.push([{ 'value': line.rowtitle, 'coltitle':ref.legend }]); }
                    table.rows[row++].push({ 'value': line.value, 'coltitle':line.coltitle });
                });
                return table;
            },
            formattedTitle: function (title) {
                return marked(title, {sanitize: true});
            }
        },

    };
</script>


<style scoped>


</style>