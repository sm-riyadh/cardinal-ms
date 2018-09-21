// eslint-disable-next-line
import { fromJS, getIn, set, setIn, toJS } from "immutable"

import {
  handleSizeHeader,
  handleComposition,
  handleAccessories,
  handleCurrency
} from "./handlers/handleStateSync"

const initialState = fromJS({
  drafts: null,
  metadata: null,
  tabledata: {
    extradata: {
      yarn_type: "",
      construction: "",
      fabric_weight: "",
      self_fabric_matching_body: "",
      wastage: "",
      s_allowance: {
        chest: "",
        length: ""
      }
    },
    table_measurments: {
      tablename: "measurments",
      tableheader: null,
      tablebody: [
        [
          { editable: false, cellType: "text", cellData: "Size" },
          {
            id: "mes_a_1",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_a_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_a_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_a_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_a_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_a_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_a_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_a_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_a_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_a_10",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Body length"
          },
          {
            id: "mes_b_1",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_b_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_b_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_b_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_b_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_b_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_b_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_b_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_b_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_b_10",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Sleeve length"
          },
          {
            id: "mes_c_1",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_c_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_c_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_c_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_c_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_c_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_c_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_c_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_c_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_c_10",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "mes_d_1",
            editable: true,
            cellType: "type",
            cellData: "1/2 Chest"
          },
          {
            id: "mes_d_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_d_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_d_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_d_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_d_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_d_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_d_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_d_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_d_10",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "mes_d_11",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ]
      ]
    },
    table_colourandcompotision: {
      tablename: "colourandcompotision",
      tableheader: null,
      tablebody: [
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Colour"
          },
          {
            editable: false,
            cellType: "text",
            cellData: "Composition"
          },
          {
            id: "cnc_auto_1",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_2",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_3",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_4",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_5",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_6",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_7",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_8",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_9",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_10",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            editable: false,
            cellType: "text",
            cellData: "Count"
          }
        ],
        [
          { id: "cnc_a_1", editable: true, cellType: "text", cellData: "" },
          { id: "cnc_a_2", editable: true, cellType: "text", cellData: "" },
          {
            id: "cnc_a_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_a_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_a_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_a_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_a_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_a_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_a_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_a_10",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_a_11",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_a_12",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_11",
            editable: false,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { id: "cnc_b_1", editable: true, cellType: "text", cellData: "" },
          { id: "cnc_b_2", editable: true, cellType: "text", cellData: "" },
          {
            id: "cnc_b_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_b_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_b_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_b_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_b_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_b_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_b_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_b_10",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_b_11",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_b_12",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_12",
            editable: false,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { id: "cnc_c_1", editable: true, cellType: "text", cellData: "" },
          { id: "cnc_c_2", editable: true, cellType: "text", cellData: "" },
          {
            id: "cnc_c_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_c_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_c_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_c_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_c_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_c_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_c_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_c_10",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_c_11",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_c_12",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_13",
            editable: false,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { id: "cnc_d_1", editable: true, cellType: "text", cellData: "" },
          { id: "cnc_d_2", editable: true, cellType: "text", cellData: "" },
          {
            id: "cnc_d_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_d_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_d_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_d_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_d_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_d_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_d_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_d_10",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_d_11",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_d_12",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_14",
            editable: false,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { id: "cnc_e_1", editable: true, cellType: "text", cellData: "" },
          { id: "cnc_e_2", editable: true, cellType: "text", cellData: "" },
          {
            id: "cnc_e_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_e_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_e_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_e_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_e_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_e_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_e_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_e_10",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_e_11",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_e_12",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_15",
            editable: false,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { id: "cnc_f_1", editable: true, cellType: "text", cellData: "" },
          { id: "cnc_f_2", editable: true, cellType: "text", cellData: "" },
          {
            id: "cnc_f_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_f_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_f_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_f_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_f_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_f_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_f_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_f_10",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_f_11",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_f_12",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_16",
            editable: false,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { id: "cnc_g_1", editable: true, cellType: "text", cellData: "" },
          { id: "cnc_g_2", editable: true, cellType: "text", cellData: "" },
          {
            id: "cnc_g_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_g_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_g_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_g_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_g_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_g_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_g_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_g_10",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_g_11",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_g_12",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_17",
            editable: false,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { id: "cnc_h_1", editable: true, cellType: "text", cellData: "" },
          { id: "cnc_h_2", editable: true, cellType: "text", cellData: "" },
          {
            id: "cnc_h_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_h_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_h_5",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_h_6",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_h_7",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_h_8",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_h_9",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_h_10",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_h_11",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_h_12",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_18",
            editable: false,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Count"
          },
          {
            id: "cnc_auto_19",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_20",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_21",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_22",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_23",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_24",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_25",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_26",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_27",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_28",
            editable: false,
            cellType: "number",
            cellData: ""
          },
          {
            id: "cnc_auto_29",
            editable: false,
            cellType: "number",
            cellData: ""
          }
        ]
      ]
    },
    table_extrafabric: {
      tablename: "extrafabric",
      tableheader: [
        { cellData: "Contrast Color" },
        { cellData: "Construction" },
        { cellData: "Composition" },
        { cellData: "Fabric Weight" },
        { cellData: "Qty" }
      ],
      tablebody: [
        [
          {
            id: "exf_a_1",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_a_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_a_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_a_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_a_5",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "exf_b_1",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_b_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_b_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_b_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_b_5",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "exf_c_1",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_c_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_c_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_c_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_c_5",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "exf_d_1",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_d_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_d_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_d_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_d_5",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "exf_e_1",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_e_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_e_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_e_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_e_5",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "exf_f_1",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_f_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_f_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_f_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_f_5",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "exf_g_1",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_g_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_g_3",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_g_4",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "exf_g_5",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ]
      ]
    },
    table_fabricfinishprocess: {
      tablename: "fabricfinishprocess",
      tableheader: null,
      tablebody: [
        [
          {
            id: "ffp_a_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "ffp_a_2",
            editable: true,
            cellType: "text",
            cellData: "Open"
          }
        ],
        [
          {
            id: "ffp_b_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "ffp_b_2",
            editable: true,
            cellType: "text",
            cellData: "YES"
          }
        ],
        [
          {
            id: "ffp_c_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "ffp_c_2",
            editable: true,
            cellType: "text",
            cellData: "YES"
          }
        ],
        [
          {
            id: "ffp_d_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "ffp_d_2",
            editable: true,
            cellType: "text",
            cellData: "PRACH FINISH"
          }
        ],
        [
          {
            id: "ffp_e_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          { id: "ffp_e_2", editable: true, cellType: "text", cellData: "" }
        ]
      ]
    },
    table_garmentapplication: {
      tablename: "garmentapplication",
      tableheader: [
        { cellData: "Description" },
        { cellData: "Excess" },
        { cellData: "Price" }
      ],
      tablebody: [
        [
          {
            id: "gap_a_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "gap_a_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "gap_a_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "gap_b_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "gap_b_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "gap_b_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "gap_c_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "gap_c_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "gap_c_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "gap_d_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "gap_d_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "gap_d_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ]
      ]
    },
    table_accessoriesname: {
      tablename: "accessoriesname",
      tableheader: [
        { cellData: "Description" },
        { cellData: "Excess" },
        { cellData: "Price" }
      ],
      tablebody: [
        [
          {
            id: "acc_a_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_a_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_a_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_b_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_b_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_b_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_c_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_c_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_c_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_d_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_d_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_d_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_e_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_e_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_e_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_f_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_f_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_f_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_g_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_g_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_g_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_h_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_h_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_h_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_i_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_i_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_i_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_j_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_j_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_j_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_k_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_k_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_k_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_l_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_l_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_l_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_m_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_m_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_m_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_n_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_n_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_n_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_o_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_o_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_o_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_p_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_p_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_p_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_q_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_q_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_q_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_r_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_r_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_r_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_s_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_s_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_s_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_t_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_t_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_t_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_u_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_u_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_u_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            id: "acc_v_1",
            editable: true,
            cellType: "select",
            cellData: ""
          },
          {
            id: "acc_v_2",
            editable: true,
            cellType: "number",
            cellData: ""
          },
          {
            id: "acc_v_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Count cost of accessories"
          },
          {
            id: "acc_auto_1",
            editable: false,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ]
      ]
    },
    table_currency: {
      tablename: "currency",
      tableheader: null,
      tablebody: [
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Exchange Rate (BDT)"
          },
          {
            id: "cur_a_1",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Count Yarn"
          },
          {
            id: "cur_b_1",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Body consumption"
          },
          {
            id: "cur_c_1",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Rib consumption"
          },
          {
            id: "cur_d_1",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Lyca % Body"
          },
          {
            id: "cur_e_1",
            editable: true,
            suffix: "%",
            cellType: "number",
            cellData: ""
          },
          {
            id: "cur_auto_1",
            editable: false,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Lyca % Rib"
          },
          {
            id: "cur_f_1",
            editable: true,
            suffix: "%",
            cellType: "number",
            cellData: ""
          },
          {
            id: "cur_auto_2",
            editable: false,
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "RIB AOP QTY"
          },
          {
            id: "cur_g_1",
            editable: true,
            cellType: "number",
            cellData: ""
          }
        ]
      ]
    },
    table_price: {
      tablename: "price",
      tableheader: [
        { cellData: "Particular" },
        { cellData: "Price" },
        { cellData: "Value" },
        { cellData: "Per Pcs" }
      ],
      tablebody: [
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Count yarn cost"
          },
          {
            id: "prc_a_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_a_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_a_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Body knitting cost"
          },
          {
            id: "prc_b_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_b_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_b_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Rib knitting cost"
          },
          {
            id: "prc_c_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_c_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_c_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Dyeing cost"
          },
          {
            id: "prc_d_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_d_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_d_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Lycra cost"
          },
          {
            id: "prc_e_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_e_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_e_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Pitch finished cost"
          },
          {
            id: "prc_f_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_f_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_f_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Brush finished cost"
          },
          {
            id: "prc_g_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_g_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_g_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Tumble dry"
          },
          {
            id: "prc_h_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_h_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_h_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: false, cellType: "text", cellData: "AOP" },
          {
            id: "prc_i_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_i_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_i_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: false, cellType: "text", cellData: "Print" },
          {
            id: "prc_j_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_j_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_j_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Sequence"
          },
          {
            id: "prc_k_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_k_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_k_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Lather patch"
          },
          {
            id: "prc_l_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_l_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_l_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Embroidery"
          },
          {
            id: "prc_m_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_m_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_m_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Accessories"
          },
          {
            id: "prc_n_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_n_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_n_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: false, cellType: "text", cellData: "CM" },
          {
            id: "prc_o_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_o_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_o_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Freight"
          },
          {
            id: "prc_p_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_p_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_p_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Commercial cost"
          },
          {
            id: "prc_q_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_q_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_q_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Extra cost 1"
          },
          {
            id: "prc_r_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_r_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_r_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Extra cost 2"
          },
          {
            id: "prc_s_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_s_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_s_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Extra cost 3"
          },
          {
            id: "prc_t_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_t_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_t_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Buying commotion"
          },
          {
            id: "prc_u_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_u_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_u_3",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Count"
          },
          {
            id: "prc_v_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            id: "prc_v_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Order price (Colour)"
          },
          {
            id: "prc_w_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: false,
            cellType: "text",
            cellData: "Difference"
          },
          {
            id: "prc_w_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Order price (White)"
          },
          {
            id: "prc_x_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: false,
            cellType: "text",
            cellData: "Difference"
          },
          {
            id: "prc_x_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Order price (Black)"
          },
          {
            id: "prc_y_1",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: false,
            cellType: "text",
            cellData: "Difference"
          },
          {
            id: "prc_y_2",
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ]
      ]
    }
  }
})
// ASK
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DRAFTS":
      return state.set("drafts", fromJS(action.payload))
    case "SAVE_DRAFT_METADATA":
      return state.set("metadata", fromJS(action.payload))
    case "SAVE_DRAFT_TABLEDATA":
      return state.set("tabledata", fromJS(action.payload))
    case "RESET_DRAFT":
      state = state.set("metadata", initialState.get("metadata"))
      return state.set("tabledata", initialState.get("tabledata"))
    case "RESET_DRAFT_TABLE":
      return state.set("tabledata", initialState.get("tabledata"))
    case "RESET_DRAFTS":
      return state.set("drafts", initialState.get("drafts"))
    case "SYNCTABLES":
      const rowindex = Number(action.payload.rowindex)
      const colindex = Number(action.payload.colindex)
      const tablename = action.payload.tablename
      const value = action.payload.value

      const prev_val = state.getIn([
        "tabledata",
        "table_" + tablename,
        "tablebody",
        rowindex,
        colindex,
        "cellData"
      ])

      const newstate = state.setIn(
        [
          "tabledata",
          "table_" + tablename,
          "tablebody",
          rowindex,
          colindex,
          "cellData"
        ],
        value
      )

      if (
        tablename === "measurments" &&
        rowindex === 0 &&
        0 <= colindex <= 10
      ) {
        return handleSizeHeader(newstate, colindex, value)
      } else if (
        tablename === "colourandcompotision" &&
        1 <= rowindex <= 8 &&
        2 <= colindex <= 11
      ) {
        return handleComposition(newstate, rowindex, colindex, value, prev_val)
      } else if (
        tablename === "accessoriesname" &&
        0 <= rowindex <= 21 &&
        colindex === 2
      ) {
        return handleAccessories(newstate, value, prev_val)
      } else if (tablename === "currency") {
        return handleCurrency(newstate, rowindex)
      } else {
        return state.set("tabledata", newstate.get("tabledata"))
      }
    default:
      return state
  }
}

export default reducer
