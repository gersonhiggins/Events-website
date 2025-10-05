// Centralized item definitions for the budget builder
export const ITEM_GROUPS = {
  Pasapalos: [
    { id: 'tequenos', name: 'Tequeños', price: 0.80, perPersonFactor: 2 },
    { id: 'croq_queso_pollo', name: 'Croquetas de queso y pollo', price: 0.90, perPersonFactor: 1 },
    { id: 'croq_camaron_hierbabuena', name: 'Croquetas de camarón y hierbabuena', price: 0.90, perPersonFactor: 1 },
    { id: 'buñuelos_bacalao', name: 'Buñuelos de bacalao', price: 1.00, perPersonFactor: 1 },
    { id: 'buñuelos_yuca', name: 'Buñuelos de yuca', price: 1.00, perPersonFactor: 1 },
    { id: 'empanaditas', name: 'Empanaditas (queso, carne o pollo)', price: 1.00, perPersonFactor: 1 },
    { id: 'cóctel_camarones', name: 'Cóctel de camarones', price: 2.00, perPersonFactor: 1 },
    { id: 'cóctel_chicharro', name: 'Cóctel de chicharro', price: 1.20, perPersonFactor: 1 },
    { id: 'pincho_camaron_yuca', name: 'Pincho de camarón y yuca', price: 1.20, perPersonFactor: 1 },
    { id: 'pasteles_andinos', name: 'Pasteles andinos', price: 1.30, perPersonFactor: 1 },
    { id: 'pastelitos_carne_queso_atun', name: 'Pastelitos de carne, queso o atún blanco', price: 0.90, perPersonFactor: 1 },
    { id: 'enrollados_carne_tocineta_queso', name: 'Enrollados de carne, tocineta y queso', price: 1.50, perPersonFactor: 1 },
    { id: 'mini_kibbe', name: 'Mini Kibbe', price: 1.50, perPersonFactor: 1 },
    { id: 'mini_cordon_bleu', name: 'Mini Cordon Bleu', price: 1.70, perPersonFactor: 1 },
    { id: 'buñuel_bacalao_cebolleta', name: 'Buñuel de bacalao y cebolleta', price: 1.00, perPersonFactor: 1 },
    { id: 'croq_plátano_queso', name: 'Croquetas de plátano y queso', price: 1.00, perPersonFactor: 1 },
    { id: 'pastelitos_hongo', name: 'Pastelitos de hongo', price: 1.20, perPersonFactor: 1 },
    { id: 'tapas_pan_sacro_atun_crema', name: 'Tapas de pan sacro de salmón, camarón o atún con queso crema', price: 1.50, perPersonFactor: 1 },
    { id: 'rollitos_primavera', name: 'Rollitos primavera', price: 1.20, perPersonFactor: 1 },
    { id: 'mini_pan_camaron', name: 'Mini pan de camarón', price: 1.50, perPersonFactor: 1 },
    { id: 'cazuela_marisco_cebolla', name: 'Cazuela de marisco y cebolla / vaso', price: 2.00, perPersonFactor: 1 },
    { id: 'patacon_paisa', name: 'Patacón paisa en láminas de carne y queso', price: 2.00, perPersonFactor: 1 },
    { id: 'canastas_camaron', name: 'Canastas de camarón', price: 2.00, perPersonFactor: 1 },
    { id: 'canastas_marisco', name: 'Canastas de marisco', price: 2.00, perPersonFactor: 1 },
    { id: 'mini_wraps_vegetariano_carne_ensalada', name: 'Mini wraps vegetariano, carne o ensalada', price: 1.80, perPersonFactor: 1 },
    { id: 'mini_crepe_camaron_champinon', name: 'Mini crepes de camarón o champiñón', price: 2.00, perPersonFactor: 1 },
    { id: 'mini_brocheta_carne_verdura_salsa', name: 'Mini brocheta de carne, verdura y salsa', price: 2.00, perPersonFactor: 1 },
    { id: 'chicharon_pulpo', name: 'Chicharrón de pulpo', price: 3.50, perPersonFactor: 1 },
    { id: 'ceviche_pescado', name: 'Ceviche de pescado', price: 2.00, perPersonFactor: 1 }
  ],
  PrimerPlato: [
    { id: 'risotto_camaron', name: 'Risotto de camarones', price: 9.00, perPersonFactor: 1 },
    { id: 'tortellini_ricota_espinaca_salsa', name: 'Tortellini ricota, espinaca y salmón o carne con salsa', price: 10.00, perPersonFactor: 1 },
    { id: 'crema_vegetal', name: 'Crema de vegetal', price: 6.00, perPersonFactor: 1 },
    { id: 'sopa_pescado_marisco', name: 'Sopa de pescado y marisco', price: 8.00, perPersonFactor: 1 },
    { id: 'sopa_frijoles_carne_ahumada', name: 'Sopa de frijoles, carne ahumada', price: 8.00, perPersonFactor: 1 },
    { id: 'jamon_serrano_esparragos', name: 'Jamón serrano con espárragos', price: 10.00, perPersonFactor: 1 },
    { id: 'canelones_carne_queso', name: 'Canelones de carne o queso', price: 9.00, perPersonFactor: 1 }
  ],
  PaltosCasuales: [
    { id: 'bandeja_picada_mixta', name: 'Bandeja picada mixta con queso y papas fritas', price: 12.00, perPersonFactor: 1 },
    { id: 'alitas_bbq', name: 'Alitas BBQ', price: 9.00, perPersonFactor: 1 },
    { id: 'club_sandwich', name: 'Club Sándwich', price: 8.00, perPersonFactor: 1 },
    { id: 'hamburguesa', name: 'Hamburguesa', price: 8.00, perPersonFactor: 1 }
  ],
  PlatosFuertes: [
    { id: 'pollo_al_curry_arroz', name: 'Pollo al curry con papas y arroz', price: 12.00, perPersonFactor: 1 },
    { id: 'lomo_encebollado_arroz_ensalada', name: 'Lomo encebollado con arroz y ensalada', price: 13.00, perPersonFactor: 1 },
    { id: 'lomo_a_parrilla_contornos', name: 'Lomo a la parrilla con dos contornos', price: 12.00, perPersonFactor: 1 },
    { id: 'lomo_pimienta_contornos', name: 'Lomo a la pimienta con dos contornos', price: 13.00, perPersonFactor: 1 },
    { id: 'plato_marinero', name: 'Plato Marinero (pescado, calamar, ensalada, pan de salmón)', price: 17.00, perPersonFactor: 1 },
    { id: 'pescado_empanizado_contornos', name: 'Pescado empanizado con dos contornos', price: 14.00, perPersonFactor: 1 },
    { id: 'carne_al_jugo_arroz_ensalada', name: 'Carne al jugo con arroz y ensalada', price: 12.00, perPersonFactor: 1 },
    { id: 'pasta_pollo_brocoli_salsa_blanca', name: 'Pasta con pollo y brócoli en salsa blanca', price: 12.00, perPersonFactor: 1 },
    { id: 'sopa_pasta_marisco', name: 'Sopa de pasta con marisco', price: 14.00, perPersonFactor: 1 },
    { id: 'lasaña_carne_queso_arroz_ensalada', name: 'Lasaña de carne o queso con arroz y ensalada', price: 12.00, perPersonFactor: 1 },
    { id: 'pescado_crema_blanca_contornos', name: 'Pescado en crema blanca con camarones y dos contornos', price: 15.00, perPersonFactor: 1 },
    { id: 'pato_naranja_contornos', name: 'Pato a la naranja con dos contornos', price: 16.00, perPersonFactor: 1 },
    { id: 'paella', name: 'Paella', price: 18.00, perPersonFactor: 1 },
    { id: 'pollo_cerveza_naranja_contornos', name: 'Pollo en salsa de cerveza y naranja con dos contornos', price: 13.00, perPersonFactor: 1 },
    { id: 'cordero_vino_tinto_contornos', name: 'Cordero en salsa de vino tinto con dos contornos', price: 17.00, perPersonFactor: 1 },
    { id: 'lomo_salsa_naranja_tocineta_contornos', name: 'Lomo en salsa naranja con jamón serrano y tocineta más contornos', price: 14.00, perPersonFactor: 1 },
    { id: 'lomo_relleno_ciruela_tocineta_contornos', name: 'Lomo relleno de ciruela y tocineta con dos contornos', price: 15.00, perPersonFactor: 1 },
    { id: 'codillo_estilo_aleman_contornos', name: 'Codillo estilo alemán con ensalada y chucrut', price: 14.00, perPersonFactor: 1 },
    { id: 'pato_estilo_asiatico_contornos', name: 'Pato estilo asiático con dos contornos', price: 15.00, perPersonFactor: 1 },
    { id: 'salmon_costra_pistacho_contornos', name: 'Salmón en costra de pistachos con contornos', price: 16.00, perPersonFactor: 1 }
  ],
  Postres: [
    { id: 'torta_decorada_persona', name: 'Torta decorada por persona', price: 5.00, perPersonFactor: 1 },
    { id: 'torta_selva_negra', name: 'Torta Selva Negra', price: 4.00, perPersonFactor: 1 },
    { id: 'torta_chocolate_vainilla_tierra_pan', name: 'Torta de chocolate, vainilla, fresa, tierra de pan', price: 4.00, perPersonFactor: 1 },
    { id: 'torta_frutos_secos', name: 'Torta frutos secos', price: 4.00, perPersonFactor: 1 },
    { id: 'flan_caramelo', name: 'Flan de caramelo', price: 3.00, perPersonFactor: 1 },
    { id: 'torta_queso', name: 'Torta de queso', price: 4.00, perPersonFactor: 1 },
    { id: 'mousse_chocolate', name: 'Mousse de chocolate', price: 3.00, perPersonFactor: 1 }
  ],
  Bebidas: [
    { id: 'agua_botella_325ml', name: 'Agua en botella 325 ml', price: 2.00, perPersonFactor: 1 },
    { id: 'gaseosa', name: 'Gaseosa', price: 2.00, perPersonFactor: 1 },
    { id: 'vino_tinto_blanco_espumante', name: 'Vino (tinto, blanco, espumante)', price: 8.00, perPersonFactor: 0.22 },
    { id: 'descorche_whisky_vodka_ron_licor', name: 'Descorche whisky, vodka, ron, licor', price: 60.00, perPersonFactor: 0.15 },

  ],
  Agregados: [
    { id: 'musica', name: 'musica y dj (no obligatorio)', price: 150, fixed: true, perPersonFactor: 0.0000001}
  ]
}

export default ITEM_GROUPS
