<template>
    <q-page>
        <q-resize-observable @resize="onResize" />
      <q-layout class="canvas">

        <h2 style="font-weight: 50">Canvas Business</h2>
      <!-- *** Painel *** -->
      <div class="row-xl mobile-hide" id="canvas" >
            
        <!-- *** Superior  *** -->

          <div class="row">
                <div class="col-auto bg" id="pc">
                  <div class="row cab"> 
                    <h6 class="col"><q-icon name="people" size="20px"/> Parceiros Chave</h6>
                    <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitpc = true"></q-btn>
                  </div>
                        <q-scroll-area style="width: 100%; max-width: 85vw; height: 350px; max-height: 70vh;">
                          <q-list>
                            <q-item class="item" v-for="item in listaParceirosChave" :key="item.id">
                              <q-card :color=item.color class="postitext row">                              
                                <p class="col">{{item.parceiroschave}}</p>
                                <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititempc(item)"></q-btn>
                              </q-card>
                            </q-item>
                          </q-list>
                        </q-scroll-area>
                </div>

                <div class="col-auto">
                 <div class="bg" id="ac">
                  <div class="row cab"> 
                    <h6 class="col"><q-icon name="vpn_key" size="20px"/> Atividades Chave</h6>
                    <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitac = true"></q-btn>
                  </div>
                      <q-scroll-area style="width: 100%; max-width: 85vw; height: 150px; max-height: 70vh;">
                        <q-list>
                          <q-item class="item" v-for="item in listaAtividadeChave" :key="item.id">
                            <q-card :color=item.color class="postitext row">                              
                              <p class="col">{{item.atividadechave}}</p>
                              <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemac(item)"></q-btn>
                            </q-card>
                          </q-item>
                        </q-list>
                      </q-scroll-area>
                 </div>
                
                 <div class="bg" id="rc">
                    <div class="row cab"> 
                      <h6 class="col"><q-icon name="extension" size="20px"/> Recursos Chave</h6>
                      <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitrc = true"></q-btn>
                    </div>
                        <q-scroll-area style="width: 100%; max-width: 85vw; height: 150px; max-height: 70vh;">
                          <q-list>
                            <q-item class="item" v-for="item in listaRecursosChave" :key="item.id">
                              <q-card :color=item.color class="postitext row">                              
                                <p class="col">{{item.recursoschave}}</p>
                                <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemrc(item)"></q-btn>
                              </q-card>
                            </q-item>
                          </q-list>
                        </q-scroll-area>
                 </div>
                </div>
                 
                <div class="col-auto bg" id="pv">
                   <div class="row cab"> 
                     <h6 class="col"><q-icon name="redeem" size="20px"/> Proposta de Valor</h6>
                     <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitpv = true"></q-btn>
                   </div>
                         <q-scroll-area style="width: 100%; max-width: 85vw; height: 350px; max-height: 70vh;">
                           <q-list>
                             <q-item class="item" v-for="item in listaPropostadeValor" :key="item.id">
                               <q-card :color=item.color class="postitext row">                              
                                 <p class="col">{{item.propostadevalor}}</p>
                                 <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititempv(item)"></q-btn>
                               </q-card>
                             </q-item>
                           </q-list>
                         </q-scroll-area>
                </div>

                <div class="col-auto">
                 <div class="bg" id="rec">
                  <div class="row cab"> 
                    <h6 class="col"><q-icon name="favorite_border" size="20px"/> Relação com Cliente</h6>
                    <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitrec = true"></q-btn>
                  </div>
                      <q-scroll-area style="width: 100%; max-width: 85vw; height: 150px; max-height: 70vh;">
                        <q-list>
                          <q-item class="item" v-for="item in listaRelacaoCliente" :key="item.id">
                            <q-card :color=item.color class="postitext row">                              
                              <p class="col">{{item.relacaocliente}}</p>
                              <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemrec(item)"></q-btn>
                            </q-card>
                          </q-item>
                        </q-list>
                      </q-scroll-area>
                 </div>
                
                 <div class="bg" id="ca">
                    <div class="row cab"> 
                      <h6 class="col"><q-icon name="local_shipping" size="20px"/> Canais</h6>
                      <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitca = true"></q-btn>
                    </div>
                        <q-scroll-area style="width: 100%; max-width: 85vw; height: 150px; max-height: 70vh;">
                          <q-list>
                            <q-item class="item" v-for="item in listaCanais" :key="item.id">
                              <q-card :color=item.color class="postitext row">                              
                                <p class="col">{{item.canais}}</p>
                                <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemca(item)"></q-btn>
                              </q-card>
                            </q-item>
                          </q-list>
                        </q-scroll-area>
                 </div>
                </div> 
                
                <div class="col-auto bg" id="sm">
                    <div class="row cab"> 
                      <h6 class="col"><q-icon name="pie_chart" size="20px"/> Segmentos de Mercado</h6>
                      <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitsm = true"></q-btn>
                    </div>
                          <q-scroll-area style="width: 100%; max-width: 85vw; height: 350px; max-height: 70vh;">
                            <q-list>
                              <q-item class="item" v-for="item in listaSegmento" :key="item.id">
                                <q-card :color=item.color class="postitext row">                              
                                  <p class="col">{{item.segmento}}</p>
                                  <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemsm(item)"></q-btn>
                                </q-card>
                              </q-item>
                            </q-list>
                          </q-scroll-area>
                </div>
          </div> 
          
        <!-- *** Inferior  *** -->

          <div class="row">
              <div class="col-auto bg" id="ec">
                    <div class="row cab"> 
                      <h6 class="col-3 flex flex-center"><q-icon name="receipt" size="20px"/> Estrutura de Custo</h6>
                      <h6 class="col flex flex-center" color="red">Total: R${{valorec}}</h6>
                      <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitec = true"></q-btn>
                    </div>
                    <q-scroll-area style="width: 100%; max-width: 85vw; height: 150px; max-height: 70vh;">
                      <q-list>
                        <q-item class="item" v-for="item in listaEstruturadeCusto" :key="item.id">
                          <q-card :color=item.color class="postitext row">                              
                            <p class="col">{{item.estruturadecusto}}</p>
                            <p class="col">R${{item.valorestruturadecusto}}</p>
                            <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemec(item)"></q-btn>
                          </q-card>
                        </q-item>
                      </q-list>
                    </q-scroll-area>
              </div>

              <div class="col-auto bg" id="fr">
                    <div class="row cab"> 
                      <h6 class="col-3 flex flex-center"><q-icon name="local_atm" size="20px"/>  Fontes de Renda</h6>
                      <h6 class="col flex flex-center" color="red">Total: R${{valorfr}}</h6>
                      <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitfr = true"></q-btn>
                    </div>
                    <q-scroll-area style="width: 100%; max-width: 85vw; height: 150px; max-height: 70vh;">
                      <q-list>
                        <q-item class="item" v-for="item in listaFontedeRenda" :key="item.id">
                          <q-card :color=item.color class="postitext row">                              
                            <p class="col">{{item.fontederenda}}</p>
                            <p class="col">R${{item.valorfontederenda}}</p>
                            <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemfr(item)"></q-btn>
                          </q-card>
                        </q-item>
                      </q-list>
                    </q-scroll-area>
              </div>
          </div>
      </div> 

      <div class="row-xl flex flex-center mobile-only">
            
        <!-- *** Superior  *** -->

          <div class="column">
                <div class="bg canvapro">
                  <div class="row cab"> 
                    <h6 class="col"><q-icon name="people" size="20px"/> Parceiros Chave</h6>
                    <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitpc = true"></q-btn>
                  </div>
                        <q-scroll-area style="width: 100%; height: 300px">
                          <q-list>
                            <q-item class="item" v-for="item in listaParceirosChave" :key="item.id">
                              <q-card :color=item.color class="postitext row">                              
                                <p class="col">{{item.parceiroschave}}</p>
                                <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititempc(item)"></q-btn>
                              </q-card>
                            </q-item>
                          </q-list>
                        </q-scroll-area>
                </div>

                 <div class="bg canvapro">
                  <div class="row cab"> 
                    <h6 class="col"><q-icon name="vpn_key" size="20px"/> Atividades Chave</h6>
                    <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitac = true"></q-btn>
                  </div>
                      <q-scroll-area style="width: 100%; height: 300px">
                        <q-list>
                          <q-item class="item" v-for="item in listaAtividadeChave" :key="item.id">
                            <q-card :color=item.color class="postitext row">                              
                              <p class="col">{{item.atividadechave}}</p>
                              <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemac(item)"></q-btn>
                            </q-card>
                          </q-item>
                        </q-list>
                      </q-scroll-area>
                 </div>
                
                 <div class="bg canvapro">
                    <div class="row cab"> 
                      <h6 class="col"><q-icon name="extension" size="20px"/> Recursos Chave</h6>
                      <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitrc = true"></q-btn>
                    </div>
                        <q-scroll-area style="width: 100%; height: 300px">
                          <q-list>
                            <q-item class="item" v-for="item in listaRecursosChave" :key="item.id">
                              <q-card :color=item.color class="postitext row">                              
                                <p class="col">{{item.recursoschave}}</p>
                                <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemrc(item)"></q-btn>
                              </q-card>
                            </q-item>
                          </q-list>
                        </q-scroll-area>
                 </div>
                 
                <div class="bg canvapro">
                   <div class="row cab"> 
                     <h6 class="col"><q-icon name="redeem" size="20px"/> Proposta de Valor</h6>
                     <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitpv = true"></q-btn>
                   </div>
                         <q-scroll-area style="width: 100%; height: 300px">
                           <q-list>
                             <q-item class="item" v-for="item in listaPropostadeValor" :key="item.id">
                               <q-card :color=item.color class="postitext row">                              
                                 <p class="col">{{item.propostadevalor}}</p>
                                 <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititempv(item)"></q-btn>
                               </q-card>
                             </q-item>
                           </q-list>
                         </q-scroll-area>
                </div>

                 <div class="bg canvapro">
                  <div class="row cab"> 
                    <h6 class="col"><q-icon name="favorite_border" size="20px"/> Relação com Cliente</h6>
                    <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitrec = true"></q-btn>
                  </div>
                      <q-scroll-area style="width: 100%; height: 300px">
                        <q-list>
                          <q-item class="item" v-for="item in listaRelacaoCliente" :key="item.id">
                            <q-card :color=item.color class="postitext row">                              
                              <p class="col">{{item.relacaocliente}}</p>
                              <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemrec(item)"></q-btn>
                            </q-card>
                          </q-item>
                        </q-list>
                      </q-scroll-area>
                 </div>
                
                 <div class="bg canvapro">
                    <div class="row cab"> 
                      <h6 class="col"><q-icon name="local_shipping" size="20px"/> Canais</h6>
                      <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitca = true"></q-btn>
                    </div>
                        <q-scroll-area style="width: 100%; height: 300px">
                          <q-list>
                            <q-item class="item" v-for="item in listaCanais" :key="item.id">
                              <q-card :color=item.color class="postitext row">                              
                                <p class="col">{{item.canais}}</p>
                                <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemca(item)"></q-btn>
                              </q-card>
                            </q-item>
                          </q-list>
                        </q-scroll-area>
                 </div>
                
                <div class="bg canvapro">
                    <div class="row cab"> 
                      <h6 class="col"><q-icon name="pie_chart" size="20px"/> Segmentos de Mercado</h6>
                      <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitsm = true"></q-btn>
                    </div>
                          <q-scroll-area style="width: 100%; height: 300px">
                            <q-list>
                              <q-item class="item" v-for="item in listaSegmento" :key="item.id">
                                <q-card :color=item.color class="postitext row">                              
                                  <p class="col">{{item.segmento}}</p>
                                  <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemsm(item)"></q-btn>
                                </q-card>
                              </q-item>
                            </q-list>
                          </q-scroll-area>
                </div>
          
                <!-- *** Inferior  *** -->

              <div class="bg canvapro">
                    <div class="row cab"> 
                      <h6 class="col-3"><q-icon name="receipt" size="20px"/> Estrutura de Custo</h6>
                      <h6 class="col flex flex-center" color="red">Total: R${{valorec}}</h6>
                      <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitec = true"></q-btn>
                    </div>
                    <q-scroll-area style="width: 100%; height: 300px">
                      <q-list>
                        <q-item class="item" v-for="item in listaEstruturadeCusto" :key="item.id">
                          <q-card :color=item.color class="postitext row">                              
                            <p class="col">{{item.estruturadecusto}}</p>
                            <p class="col">{{item.valorestruturadecusto}}</p>
                            <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemec(item)"></q-btn>
                          </q-card>
                        </q-item>
                      </q-list>
                    </q-scroll-area>
              </div>

              <div class="bg canvapro">
                    <div class="row cab"> 
                      <h6 class="col-3"><q-icon name="local_atm" size="20px"/>  Fontes de Renda</h6>
                      <h6 class="col flex flex-center" color="red">Total: R${{valorfr}}</h6>
                      <q-btn round color="primary" class="btn-postit" size="xs" icon="add" @click.native="postitfr = true"></q-btn>
                    </div>
                    <q-scroll-area style="width: 100%; height: 300px">
                      <q-list>
                        <q-item class="item" v-for="item in listaFontedeRenda" :key="item.id">
                          <q-card :color=item.color class="postitext row">                              
                            <p class="col">{{item.fontederenda}}</p>
                            <p class="col">{{item.valorfontederenda}}</p>
                            <q-btn round icon="edit" class="no-shadow" size="xs" @click="edititemfr(item)"></q-btn>
                          </q-card>
                        </q-item>
                      </q-list>
                    </q-scroll-area>
              </div>
          </div>
      </div> 
      <!-- *** Post-it PC *** -->
      <q-modal v-model="postitpc" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
          <q-modal-layout>
            <br><br>
            <q-card :color='color' class="card">
              <q-input v-model="parceiroschave" type="textarea"/>
            </q-card>
          </q-modal-layout>
          <div class="botoes row flex flex-center">
            <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
            <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
            <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
            <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
            <q-btn icon="done" flat label="OK" class="no-shadow btncolor" size="xl" @click="onOkpc()"></q-btn>
          </div>
      </q-modal>
      
      <!-- *** Post-it AC *** -->
      <q-modal v-model="postitac" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
          <q-modal-layout>
            <br><br>
            <q-card :color='color' class="card">
              <q-input v-model="atividadechave" type="textarea"/>
            </q-card>
          </q-modal-layout>
          <div class="botoes row flex flex-center">
            <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
            <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
            <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
            <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
            <q-btn icon="done" flat label="OK" class="no-shadow btncolor" size="xl" @click="onOkac()"></q-btn>
          </div>
      </q-modal>

      <!-- *** Post-it RC *** -->
      <q-modal v-model="postitrc" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
          <q-modal-layout>
            <br><br>
            <q-card :color='color' class="card">
              <q-input v-model="recursoschave" type="textarea"/>
            </q-card>
          </q-modal-layout>
          <div class="botoes row flex flex-center">
            <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
            <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
            <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
            <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
            <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOkrc()"></q-btn>
          </div>
      </q-modal>
      
      <!-- *** Post-it PV *** -->
      <q-modal v-model="postitpv" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
          <q-modal-layout>
            <br><br>
            <q-card :color='color' class="card">
              <q-input v-model="propostadevalor" type="textarea"/>
            </q-card>
          </q-modal-layout>
          <div class="botoes row flex flex-center">
            <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
            <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
            <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
            <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
            <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOkpv()"></q-btn>
          </div>
      </q-modal>

      <!-- *** Post-it REC *** -->
      <q-modal v-model="postitrec" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
          <q-modal-layout>
            <br><br>
            <q-card :color='color' class="card">
              <q-input v-model="relacaocliente" type="textarea"/>
            </q-card>
          </q-modal-layout>
          <div class="botoes row flex flex-center">
            <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
            <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
            <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
            <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
            <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOkrec()"></q-btn>
          </div>
      </q-modal>

      <!-- *** Post-it CA *** -->
      <q-modal v-model="postitca" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
          <q-modal-layout>
            <br><br>
            <q-card :color='color' class="card">
              <q-input v-model="canais" type="textarea"/>
            </q-card>
          </q-modal-layout>
          <div class="botoes row flex flex-center">
            <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
            <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
            <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
            <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
            <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOkca()"></q-btn>
          </div>
      </q-modal>

      <!-- *** Post-it SM *** -->
      <q-modal v-model="postitsm" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
          <q-modal-layout>
            <br><br>
            <q-card :color='color' class="card">
              <q-input v-model="segmento" type="textarea"/>
            </q-card>
          </q-modal-layout>
          <div class="botoes row flex flex-center">
            <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
            <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
            <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
            <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
            <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOksm()"></q-btn>
          </div>
      </q-modal>

      <!-- *** Post-it EC *** -->
      <q-modal v-model="postitec" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
          <q-modal-layout>
            <br><br>
            <q-card :color='color' class="card">
              <q-input v-model="estruturadecusto" type="textarea"/>
              <q-input v-model="valorestruturadecusto" type="number" prefix="R$"/>
            </q-card>
          </q-modal-layout>
          <div class="botoes row flex flex-center">
            <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
            <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
            <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
            <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
            <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOkec()"></q-btn>
          </div>
      </q-modal>

      <!-- *** Post-it FR *** -->
      <q-modal v-model="postitfr" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
          <q-modal-layout>
            <br><br>
            <q-card :color='color' class="card">
              <q-input v-model="fontederenda" type="textarea"/>
              <q-input v-model="valorfontederenda" type="number" prefix="R$"/>

            </q-card>
          </q-modal-layout>
          <div class="botoes row flex flex-center">
            <q-btn class="no-shadow btncolor blue" @click="blueitem()"></q-btn>
            <q-btn class="no-shadow btncolor green" @click="greenitem()"></q-btn>
            <q-btn class="no-shadow btncolor red" @click="reditem()"></q-btn>
            <q-btn class="no-shadow btncolor amber" @click="amberitem()"></q-btn>
            <q-btn icon="done" flat  label="OK" class="no-shadow btncolor" size="xl" @click="onOkfr()"></q-btn>
          </div>
      </q-modal>

      <!-- *** Post-it edit PC *** -->
      <q-modal v-model="postiteditpc" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
        <q-modal-layout>
            <br><br>
            <q-card :color='editedItem.color' class="card">
              <q-input v-model="editedItem.parceiroschave" type="textarea"/>
            </q-card>
        </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitempc(item)"></q-btn>
                <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="savepc()"></q-btn>
              </div>
      </q-modal>
      
      <!-- *** Post-it edit AC*** -->
      <q-modal v-model="postiteditac" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
        <q-modal-layout>
            <br><br>
            <q-card :color='editedItem.color' class="card">
              <q-input v-model="editedItem.atividadechave" type="textarea"/>
            </q-card>
        </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemac(item)"></q-btn>
                <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="saveac()"></q-btn>
              </div>
      </q-modal>

      <!-- *** Post-it edit RC *** -->
      <q-modal v-model="postiteditrc" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
        <q-modal-layout>
            <br><br>
            <q-card :color='editedItem.color' class="card">
              <q-input v-model="editedItem.recursoschave" type="textarea"/>
            </q-card>
        </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemrc(item)"></q-btn>
                <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="saverc()"></q-btn>
              </div>
      </q-modal>
      
      <!-- *** Post-it edit PV *** -->
      <q-modal v-model="postiteditpv" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
        <q-modal-layout>
            <br><br>
            <q-card :color='editedItem.color' class="card">
              <q-input v-model="editedItem.propostadevalor" type="textarea"/>
            </q-card>
        </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitempv(item)"></q-btn>
                <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="savepv()"></q-btn>
              </div>
      </q-modal>

      <!-- *** Post-it edit REC *** -->
      <q-modal v-model="postiteditrec" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
        <q-modal-layout>
            <br><br>
            <q-card :color='editedItem.color' class="card">
              <q-input v-model="editedItem.relacaocliente" type="textarea"/>
            </q-card>
        </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemrec(item)"></q-btn>
                <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="saverec()"></q-btn>
              </div>
      </q-modal>
      
      <!-- *** Post-it edit CA *** -->
      <q-modal v-model="postiteditca" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
        <q-modal-layout>
            <br><br>
            <q-card :color='editedItem.color' class="card">
              <q-input v-model="editedItem.canais" type="textarea"/>
            </q-card>
        </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemca(item)"></q-btn>
                <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="saveca()"></q-btn>
              </div>
      </q-modal>
      
      <!-- *** Post-it edit SM *** -->
      <q-modal v-model="postiteditsm" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
        <q-modal-layout>
            <br><br>
            <q-card :color='editedItem.color' class="card">
              <q-input v-model="editedItem.segmento" type="textarea"/>
            </q-card>
        </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemsm(item)"></q-btn>
                <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="savesm()"></q-btn>
              </div>
      </q-modal>
      
      <!-- *** Post-it edit EC *** -->
      <q-modal v-model="postiteditec" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
        <q-modal-layout>
            <br><br>
            <q-card :color='editedItem.color' class="card">
              <q-input v-model="editedItem.estruturadecusto" type="textarea"/>
              <q-input v-model="editedItem.valorestruturadecusto" type="number" prefix="R$"/>              
            </q-card>
        </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemec(item)"></q-btn>
                <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="saveec()"></q-btn>
              </div>
      </q-modal>
      
      <!-- *** Post-it edit FR *** -->
      <q-modal v-model="postiteditfr" :color='color' :content-css="{minWidth: '40vw', minHeight: '40vh'}">
        <q-modal-layout>
            <br><br>
            <q-card :color='editedItem.color' class="card">
              <q-input v-model="editedItem.fontederenda" type="textarea"/>
              <q-input v-model="editedItem.valorfontederenda" type="number" prefix="R$"/>              
            </q-card>
        </q-modal-layout>
              <div class="botoes row flex flex-center">
                <q-btn class="no-shadow btncolor blue" @click="blueitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor green" @click="greenitem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor red" @click="reditem(editedItem)"></q-btn>
                <q-btn class="no-shadow btncolor amber" @click="amberitem(editedItem)"></q-btn>
                <q-btn icon="delete" flat  class="no-shadow btncolor" size="xl" @click="deleteitemfr(item)"></q-btn>
                <q-btn icon="done" label="OK" flat   class="no-shadow btncolor" size="xl" @click="savefr()"></q-btn>
              </div>
      </q-modal>

    </q-layout>
    </q-page>
  </template>

  <script>
  import * as firebase from 'firebase'
  
  export default {
    name: 'PageCanvas',
    data () {
      return {
        postitpc: false,
        postitac: false,
        postitrc: false,
        postitpv: false,
        postitrec: false,
        postitca: false,
        postitsm: false,
        postitec: false,
        postitfr: false,
        postiteditpc: false,
        postiteditac: false,
        postiteditrc: false,
        postiteditpv: false,
        postiteditrec: false,
        postiteditca: false,
        postiteditsm: false,
        postiteditec: false,
        postiteditfr: false,
        editedIndex: -1,
        editedItem: {},
        item: '',
        user: this.$store.getters.user,
        usuario: this.$store.getters.usuario,
        myProject: this.$store.getters.myProject,
        parceiroschave: '',
        atividadechave: '',
        propostadevalor: '',
        recursoschave: '',
        relacaocliente: '',
        canais: '',
        segmento: '',
        estruturadecusto: '',
        valorestruturadecusto: '',
        valorfontederenda: '',
        fontederenda: '',
        color: 'orange'
      }
    },
    mounted() {
      if (this.$store.getters.myProject.key == null || this.$store.getters.myProject.key == undefined || this.$store.getters.myProject.key == '') {
      this.$router.push("/")  
      }
    },
    computed: {
      listaParceirosChave () {
        return this.$store.getters.listaParceirosChave
      },
      listaAtividadeChave () {
        return this.$store.getters.listaAtividadeChave
      },
      listaRecursosChave () {
        return this.$store.getters.listaRecursosChave
      },
      listaPropostadeValor () {
        return this.$store.getters.listaPropostadeValor
      },
      listaRelacaoCliente () {
        return this.$store.getters.listaRelacaoCliente
      },
      listaCanais () {
        return this.$store.getters.listaCanais
      },
      listaSegmento () {
        return this.$store.getters.listaSegmento
      },
      listaEstruturadeCusto () {
        return this.$store.getters.listaEstruturadeCusto
      },
      listaFontedeRenda () {
        return this.$store.getters.listaFontedeRenda
      },
      valorec () {
        var valorec = 0
        var listaEstruturadeCusto = this.listaEstruturadeCusto
        for (var i = 0; i < listaEstruturadeCusto.length; i++) {
          valorec = listaEstruturadeCusto[i].valorestruturadecusto + valorec
        }
        return valorec
      },
      valorfr () {
        var valorfr = 0
        var listaFontedeRenda = this.listaFontedeRenda
        for (var i = 0; i < listaFontedeRenda.length; i++) {
          valorfr = listaFontedeRenda[i].valorfontederenda + valorfr
        }
        return valorfr
      }
    }, 
    methods: {
      canvasf () {
        this.$router.push("/canvas")
      },
      pixarf () {
        this.$router.push("/pixar")
      },
      onResize (size) {
      var a = size.width
      var b = size.height
      document.getElementById('pc').style.width = a/6 + 'px'
      document.getElementById('pc').style.height = b/2 + 5 + 'px'

      document.getElementById('ac').style.width = a/6 + 'px'
      document.getElementById('ac').style.height = b/4 + 'px'

      document.getElementById('rc').style.width = a/6 + 'px'
      document.getElementById('rc').style.height = b/4 + 'px'

      document.getElementById('pv').style.width = a/6 + 'px'
      document.getElementById('pv').style.height = b/2 + 5 + 'px'

      document.getElementById('rec').style.width = a/6 + 'px'
      document.getElementById('rec').style.height = b/4 + 'px'

      document.getElementById('ca').style.width = a/6 + 'px'
      document.getElementById('ca').style.height = b/4 + 'px'

      document.getElementById('sm').style.width = a/6 + 'px'
      document.getElementById('sm').style.height = b/2 + 5 + 'px'
      
      document.getElementById('ec').style.width = a/2 - (a * 0.078) + 'px'
      document.getElementById('ec').style.height = b/4 + 'px'
      
      document.getElementById('fr').style.width = a/2 - (a * 0.078) + 'px'
      document.getElementById('fr').style.height = b/4 + 'px'
      },
      onOkpc () {
        var key = this.myProject.key
        var uid = this.user.uid
        var userData = {
          parceiroschave: this.parceiroschave, 
          color: this.color
        }
        var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaParceirosChave/').push().key    
        var updates = {}    
            var uid = this.user.uid
            var key = this.myProject.key
            updates['usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaParceirosChave/' + newCanvaKey] = userData
            this.parceiroschave = ''
            this.postitpc = false
            return firebase.database().ref().update(updates)
      },
      onOkac () {
        var key = this.myProject.key
        var uid = this.user.uid
        var userData = {
          atividadechave: this.atividadechave, 
          color: this.color
        }
        var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaAtividadeChave/').push().key    
        var updates = {}    
            var uid = this.user.uid
            var key = this.myProject.key
            updates['usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaAtividadeChave/' + newCanvaKey] = userData
            this.atividadechave = ''
            this.postitac = false
            return firebase.database().ref().update(updates)
      },
      onOkrc () {
        var key = this.myProject.key
        var uid = this.user.uid
        var userData = {
          recursoschave: this.recursoschave, 
          color: this.color
        }
        var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaRecursosChave/').push().key    
        var updates = {}    
            var uid = this.user.uid
            var key = this.myProject.key
            updates['usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaRecursosChave/' + newCanvaKey] = userData
            this.recursoschave = ''
            this.postitrc = false
            return firebase.database().ref().update(updates)
      },
      onOkpv () {
        var key = this.myProject.key
        var uid = this.user.uid
        var userData = {
          propostadevalor: this.propostadevalor, 
          color: this.color
        }
        var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaPropostadeValor/').push().key    
        var updates = {}    
            var uid = this.user.uid
            var key = this.myProject.key
            updates['usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaPropostadeValor/' + newCanvaKey] = userData
            this.propostadevalor = ''
            this.postitpv = false
            return firebase.database().ref().update(updates)
      },
      onOkrec () {
        var key = this.myProject.key
        var uid = this.user.uid
        var userData = {
          relacaocliente: this.relacaocliente, 
          color: this.color
        }
        var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaRelacaoCliente/').push().key    
        var updates = {}    
            var uid = this.user.uid
            var key = this.myProject.key
            updates['usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaRelacaoCliente/' + newCanvaKey] = userData
            this.relacaocliente = ''
            this.postitrec = false
            return firebase.database().ref().update(updates)
      },
      onOkca () {
        var key = this.myProject.key
        var uid = this.user.uid
        var userData = {
          canais: this.canais, 
          color: this.color
        }
        var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaCanais/').push().key    
        var updates = {}    
            var uid = this.user.uid
            var key = this.myProject.key
            updates['usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaCanais/' + newCanvaKey] = userData
            this.canais = ''
            this.postitca = false
            return firebase.database().ref().update(updates)
      },
      onOksm () {
        var key = this.myProject.key
        var uid = this.user.uid
        var userData = {
          segmento: this.segmento, 
          color: this.color
        }
        var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaSegmento/').push().key    
        var updates = {}    
            var uid = this.user.uid
            var key = this.myProject.key
            updates['usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaSegmento/' + newCanvaKey] = userData
            this.segmento = ''
            this.postitsm = false
            return firebase.database().ref().update(updates)
      },
      onOkec () {
        var key = this.myProject.key
        var uid = this.user.uid
        var userData = {
          estruturadecusto: this.estruturadecusto, 
          valorestruturadecusto: this.valorestruturadecusto,
          color: this.color
        }
        var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaEstruturadeCusto/').push().key    
        var updates = {}    
            var uid = this.user.uid
            var key = this.myProject.key
            updates['usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaEstruturadeCusto/' + newCanvaKey] = userData
            this.estruturadecusto = ''
            this.valorestruturadecusto = ''
            this.postitec = false
            return firebase.database().ref().update(updates)
      },
      onOkfr () {
        var key = this.myProject.key
        var uid = this.user.uid
        var userData = {
          fontederenda: this.fontederenda, 
          valorfontederenda: this.valorfontederenda,
          color: this.color
        }
        var newCanvaKey = firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaFontedeRenda/').push().key    
        var updates = {}    
            var uid = this.user.uid
            var key = this.myProject.key
            updates['usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaFontedeRenda/' + newCanvaKey] = userData
            this.fontederenda = ''
            this.valorfontederenda = ''
            this.postitfr = false
            return firebase.database().ref().update(updates)
      },
      deleteitempc (item) {
        this.savepc()
        var keyitem = this.editedIndex
        var uid = this.user.uid
        var key = this.myProject.key
        if (this.listaParceirosChave.length > 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaParceirosChave/' + keyitem).remove()
          this.postiteditpc = false
        } else if (this.listaParceirosChave.length == 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/').update({listaParceirosChave: ""})
          this.postiteditpc = false
        }
      },
      deleteitemac (item) {
        this.saveac()
        var keyitem = this.editedIndex
        var uid = this.user.uid
        var key = this.myProject.key
        if (this.listaAtividadeChave.length > 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaAtividadeChave/' + keyitem).remove()
          this.postiteditac = false
        } else if (this.listaAtividadeChave.length == 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/').update({listaAtividadeChave: ""})
          this.postiteditac = false
        }
      },
      deleteitemrc (item) {
        this.saverc()
        var keyitem = this.editedIndex
        var uid = this.user.uid
        var key = this.myProject.key
        if (this.listaRecursosChave.length > 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaRecursosChave/' + keyitem).remove()
          this.postiteditrc = false
        } else if (this.listaRecursosChave.length == 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/').update({listaRecursosChave: ""})
          this.postiteditrc = false
        }
      },
      deleteitempv (item) {
        this.savepv()
        var keyitem = this.editedIndex
        var uid = this.user.uid
        var key = this.myProject.key
        if (this.listaPropostadeValor.length > 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaPropostadeValor/' + keyitem).remove()
          this.postiteditpv = false
        } else if (this.listaPropostadeValor.length == 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/').update({listaPropostadeValor: ""})
          this.postiteditpv = false
        }
      },
      deleteitemrec (item) {
        this.saverec()
        var keyitem = this.editedIndex
        var uid = this.user.uid
        var key = this.myProject.key
        if (this.listaRelacaoCliente.length > 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaRelacaoCliente/' + keyitem).remove()
          this.postiteditrec = false
        } else if (this.listaRelacaoCliente.length == 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/').update({listaRelacaoCliente: ""})
          this.postiteditrec = false
        }
      },
      deleteitemca (item) {
        this.saveca()
        var keyitem = this.editedIndex
        var uid = this.user.uid
        var key = this.myProject.key
        if (this.listaCanais.length > 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaCanais/' + keyitem).remove()
          this.postiteditca = false
        } else if (this.listaCanais.length == 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/').update({listaCanais: ""})
          this.postiteditca = false
        }
      },
      deleteitemsm (item) {
        this.savesm()
        var keyitem = this.editedIndex
        var uid = this.user.uid
        var key = this.myProject.key
        if (this.listaSegmento.length > 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaSegmento/' + keyitem).remove()
          this.postiteditsm = false
        } else if (this.listaSegmento.length == 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/').update({listaSegmento: ""})
          this.postiteditsm = false
        }
      },
      deleteitemec (item) {
        this.saveec()
        var keyitem = this.editedIndex
        var uid = this.user.uid
        var key = this.myProject.key
        if (this.listaEstruturadeCusto.length > 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaEstruturadeCusto/' + keyitem).remove()
          this.postiteditec = false
        } else if (this.listaEstruturadeCusto.length == 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/').update({listaEstruturadeCusto: ""})
          this.postiteditec = false
        }
      },
      deleteitemfr (item) {
        this.savefr()
        var keyitem = this.editedIndex
        var uid = this.user.uid
        var key = this.myProject.key
        if (this.listaFontedeRenda.length > 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaFontedeRenda/' + keyitem).remove()
          this.postiteditfr = false
        } else if (this.listaFontedeRenda.length == 1) {
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/').update({listaFontedeRenda: ""})
          this.postiteditfr = false
        }
      },
      edititempc (item) {
        this.editedIndex = this.listaParceirosChave.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.color = this.editedItem.color
        this.postiteditpc = true
      },
      edititemac (item) {
        this.editedIndex = this.listaAtividadeChave.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.color = this.editedItem.color
        this.postiteditac = true
      },
      edititemrc (item) {
        this.editedIndex = this.listaRecursosChave.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.color = this.editedItem.color
        this.postiteditrc = true
      },
      edititempv (item) {
        this.editedIndex = this.listaPropostadeValor.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.color = this.editedItem.color
        this.postiteditpv = true
      },
      edititemrec (item) {
        this.editedIndex = this.listaRelacaoCliente.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.color = this.editedItem.color
        this.postiteditrec = true
      },
      edititemca (item) {
        this.editedIndex = this.listaCanais.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.color = this.editedItem.color
        this.postiteditca = true
      },
      edititemsm (item) {
        this.editedIndex = this.listaSegmento.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.color = this.editedItem.color
        this.postiteditsm = true
      },
      edititemec (item) {
        this.editedIndex = this.listaEstruturadeCusto.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.color = this.editedItem.color
        this.postiteditec = true
      },
      edititemfr (item) {
        this.editedIndex = this.listaFontedeRenda.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.color = this.editedItem.color
        this.postiteditfr = true
      },
      savepc () {
        if (this.editedIndex > -1) {

          var listaParceirosChave = this.listaParceirosChave
          Object.assign(listaParceirosChave[this.editedIndex], this.editedItem)
          listaParceirosChave[this.editedIndex].color = this.color
          var uid = this.user.uid
          var key = this.myProject.key
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaParceirosChave/').set(listaParceirosChave)
          this.postiteditpc = false
        }
        this.color = "orange"
      },
      saveac () {
        if (this.editedIndex > -1) {

          var listaAtividadeChave = this.listaAtividadeChave
          Object.assign(listaAtividadeChave[this.editedIndex], this.editedItem)
          listaAtividadeChave[this.editedIndex].color = this.color
          var uid = this.user.uid
          var key = this.myProject.key
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaAtividadeChave/').set(listaAtividadeChave)
          this.postiteditac = false
        }
        this.color = "orange"
      },
      saverc () {
        if (this.editedIndex > -1) {

          var listaRecursosChave = this.listaRecursosChave
          Object.assign(listaRecursosChave[this.editedIndex], this.editedItem)
          listaRecursosChave[this.editedIndex].color = this.color
          var uid = this.user.uid
          var key = this.myProject.key
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaRecursosChave/').set(listaRecursosChave)
          this.postiteditrc = false
        }
        this.color = "orange"
      },
      savepv () {
        if (this.editedIndex > -1) {

          var listaPropostadeValor = this.listaPropostadeValor
          Object.assign(listaPropostadeValor[this.editedIndex], this.editedItem)
          listaPropostadeValor[this.editedIndex].color = this.color
          var uid = this.user.uid
          var key = this.myProject.key
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaPropostadeValor/').set(listaPropostadeValor)
          this.postiteditpv = false
        }
        this.color = "orange"
      },
      saverec () {
        if (this.editedIndex > -1) {

          var listaRelacaoCliente = this.listaRelacaoCliente
          Object.assign(listaRelacaoCliente[this.editedIndex], this.editedItem)
          listaRelacaoCliente[this.editedIndex].color = this.color
          var uid = this.user.uid
          var key = this.myProject.key
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaRelacaoCliente/').set(listaRelacaoCliente)
          this.postiteditrec = false
        }
        this.color = "orange"
      },
      saveca () {
        if (this.editedIndex > -1) {

          var listaCanais = this.listaCanais
          Object.assign(listaCanais[this.editedIndex], this.editedItem)
          listaCanais[this.editedIndex].color = this.color
          var uid = this.user.uid
          var key = this.myProject.key
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaCanais/').set(listaCanais)
          this.postiteditca = false
        }
        this.color = "orange"
      },
      savesm () {
        if (this.editedIndex > -1) {

          var listaSegmento = this.listaSegmento
          Object.assign(listaSegmento[this.editedIndex], this.editedItem)
          listaSegmento[this.editedIndex].color = this.color
          var uid = this.user.uid
          var key = this.myProject.key
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaSegmento/').set(listaSegmento)
          this.postiteditsm = false
        }
        this.color = "orange"
      },
      saveec () {
        if (this.editedIndex > -1) {

          var listaEstruturadeCusto = this.listaEstruturadeCusto
          Object.assign(listaEstruturadeCusto[this.editedIndex], this.editedItem)
          listaEstruturadeCusto[this.editedIndex].color = this.color
          var uid = this.user.uid
          var key = this.myProject.key
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaEstruturadeCusto/').set(listaEstruturadeCusto)
          this.postiteditec = false
        }
        this.color = "orange"
      },
      savefr () {
        if (this.editedIndex > -1) {

          var listaFontedeRenda = this.listaFontedeRenda
          Object.assign(listaFontedeRenda[this.editedIndex], this.editedItem)
          listaFontedeRenda[this.editedIndex].color = this.color
          var uid = this.user.uid
          var key = this.myProject.key
          firebase.database().ref().child('usuarios/' + uid + '/user/projeto/' + key + '/canvas/listaFontedeRenda/').set(listaFontedeRenda)
          this.postiteditfr = false
        }
        this.color = "orange"
      },
      blueitem (editedItem) {
        this.color = 'light-blue-13'
        editedItem.color = 'light-blue-13'
      },
      greenitem (editedItem) {
        this.color = 'light-green'
        editedItem.color = 'light-green'
      },
      reditem (editedItem) {
        this.color = 'red-6'
        editedItem.color = 'red-6'
      },
      amberitem (editedItem) {
        this.color = 'orange'
        editedItem.color = 'orange'
      }
    }
  }
    
  </script>
  
  <style>
    .blue {
      background: #00b0ff
    }
    .red {
      background: #f44336
    }
    .green {
      background: #8bc34a
    }
    .amber {
      background: rgb(255, 152, 0)
    }
    #corpo {
      background-color: rgb(255, 152, 0);
      padding: 15%;
      border-radius: 10px     
    }
    .botoes {
      background-color: transparent
    }
    .btncolor {
      margin: 2%
    }
    h6 {
      font-size: 0.75em;
      color: gray
    }
    .bg {
      background-color: rgb(232, 234, 246)
    }
    .btn-postit {
      margin-top: 15px
    }
      #pc, #pv, #sm {
          margin: 5px;
          margin-top: 0;
          padding: 0.5%;
          padding-top: 0;
          color: black
      }
      #ac, #rc, #rec, #ca {
        padding: 5%;
        margin-bottom: 5px;
        padding-top: 0;
        color: black

      }
      #ec, #fr {
        margin-left: 5px; 
        padding: 1%;
        padding-top: 0;
        color: black

      }
      .postitext {
        min-width: 100%;
        padding-top: 5px;
        padding-bottom: 0px;
        padding-left: 10px;
        padding-right: 10px;
        display:inline-flex;
        font-family: 'Arial Narrow', Arial, sans-serif;
      }
      .modal-content,
      .q-modal-layout {
        padding: 2%;
      }
      .card {
        padding: 8%;
        border-radius: 10px
      }
      .modal:not(.maximized) {
      background: rgba(0,0,0,0.7);
      }
      .cab {
        height: 45px;
      }
      .item {
        padding-top: 0px;
        padding-bottom: 5px;
      }
      .canvas {
        padding: 5%;
        padding-top: 0;
      }
      .canvapro {
        width: 300px;
        height: 400px;
        padding: 2%;
        margin: 2%
      }
  </style>