<template>
    <div v-if="item.length" class="">

        <div v-for="ref in item" :key="item.id" >

            <v-collapse-wrapper>

                <div class="header flex flex-row w-full cursor-pointer" v-collapse-toggle>
                    <div>Tabell {{ref.navn}}: {{ref.tekst}}</div>
                </div>

                <div class="my-content my-2" v-collapse-content>
                    <table v-if="ref.lineref">

                        <template v-for="(line, part) in thecomputed(ref)"
                                  class="border-collapse border">

                            <thead v-if="part==='head'">
                            <th v-for="h in line" class="border">{{h}}</th>
                            </thead>
                            <tbody v-else>
                            <tr v-for="row in line">
                                <td v-for="d in row" class="border">{{d}}</td>
                            </tr>
                            </tbody>

                        </template>
                    </table>
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
            thecomputed: function(ref){

                var table = { 'head': [], 'rows': [], };
                //var table = {'rows':[],};
                table.head.push('X');
                var col = -1;
                var row = 0;
                ref.lineref.forEach(function(line){
                    if(line.coltitle !== table.head[col+1]) {
                        table.head.push(line.coltitle);
                        col++;
                        row=0;
                    }
                    if(col===0) {
                        table.rows.push([line.rowtitle]);
                    };
                    table.rows[row++].push(line.value);
                });

                return table;

            }
         },
    };
</script>