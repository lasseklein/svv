<template>
    <div v-if="item.length" class="">

        <div v-for="ref in item" :key="item.id">

            <v-collapse-wrapper>

                <div class="header flex flex-row w-full cursor-pointer text-sm" v-collapse-toggle>
                    <i class="fas fa-table text-lg text-gray-dark mr-2"></i>Tabell {{ref.navn}}:<span class="ml-2 text-gray-dark">{{ref.tekst}}</span>
                </div>

                <div class="my-content my-2 pb-0 mb-0" v-collapse-content>

                    <div class="overflow-x-scroll">

                    <table v-if="ref.lineref" class="w-full text-xs md:text-sm">
                        <template v-for="(line, part) in tabledata(ref)"
                                  class="border-collapse border">
                            <thead v-if="part==='head'">
                                <tr>
                                    <th v-for="title in line" class="border text-left p-1 bg-gray-dark text-white">{{title}}</th>
                                </tr>
                            </thead>
                            <tbody v-else>
                                <tr v-for="row in line">
                                    <td v-for="cell in row" class="border bg-gray-bg border-white p-1">{{cell}}</td>
                                </tr>
                            </tbody>
                        </template>
                    </table>
                    </div>

                </div>
            </v-collapse-wrapper>

        </div>
    </div>
</template>


<script>

    export default {
        name: 'Table',
        props: ['item', 'name'],
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
                    if(col===0) { table.rows.push([line.rowtitle]); };
                    //console.log('Rad '+row+' val: '+line.value)
                    table.rows[row++].push(line.value);
                });
                return table;
            },
         },
    };
</script>