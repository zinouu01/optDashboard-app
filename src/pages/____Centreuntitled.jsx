{/*<Grid item xs={6}  >
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">Selectionée Wilaya</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={wilaya}
                                    label="Choisissez wilaya"
                                    onChange={handleChange}
                                  
                                  >
                                   { wilayasAlgerie.map( (singleWilaya,i) => (<MenuItem   value={singleWilaya}>{singleWilaya}</MenuItem>) )}
                                    
                                   
                                  </Select>
                                </FormControl>
                              </Box>
                        </Grid>
                        <Grid item xs={6}>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">Selectionée Centre</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={centre}
                                    label="Choisissez wilaya"
                                    onChange={(el)=> { centreSet(el.target.value)} }
                                  
                                  >
                                   { centreList.map( (singleCentre,i) => (<MenuItem value={singleCentre}>{singleCentre.Adrcen}</MenuItem>) )}
                                    
                                   
                                  </Select>
                                </FormControl>
                              </Box>

                        </Grid>*/}




import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {
    SelectChangeEvent
} from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import centres from './data.json';
import {
    BarChart
} from '@mui/x-charts/BarChart';
import {
    PieChart
} from '@mui/x-charts/PieChart';


const wilayasAlgerie = [
    "Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Béchar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tébessa",
    "Tlemcen",
    "Tiaret",
    "Tizi Ouzou",
    "Alger",
    "Djelfa",
    "Jijel",
    "Sétif",
    "Saïda",
    "Skikda",
    "Sidi Bel Abbès",
    "Annaba",
    "Guelma",
    "Constantine",
    "Médéa",
    "Mostaganem",
    "M'Sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "El Bayadh",
    "Illizi",
    "Bordj Bou Arréridj",
    "Boumerdès",
    "El Tarf",
    "Tindouf",
    "Tissemsilt",
    "El Oued",
    "Khenchela",
    "Souk Ahras",
    "Tipaza",
    "Mila",
    "Aïn Defla",
    "Naâma",
    "Aïn Témouchent",
    "Ghardaïa",
    "Relizane",
    "El M'Ghair",
    "El Menia",
    "Ouled Djellal",
    "Bordj Baji Mokhtar",
    "Beni Abbes",
    "Timimoun",
    "Touggourt",
    "Djanet",
    "In Salah"
];

const BarChart1Data = [{
    data: [10, 32, 30, 22]
}, {
    data: [100, 17, 30, 22]
}, ];


export default function StatsParCentre() {
    React.useEffect(() => {
        // console.log('centres', centres)
    }, []);


    const [wilaya, WilayaSet] = React.useState('');
    const [centreList, centreListSet] = React.useState([]);
    const [centre, centreSet] = React.useState([]);

    function handleChange({
        target
    }) {
        WilayaSet(target.value);
        // console.log('--- target.value', target.value)
        let agenceId = wilayasAlgerie.indexOf(target.value) + 1;
        if (agenceId != -1) {
            centreListSet(centres.filter(el => el.codeAg == agenceId));
        }
    }

    const elements = < Grid container spacing = {
        2
    }
    style = {
            {
                padding: '45px'
            }
        } >
        <
        Grid container xs = {
            8
        }
    style = {
            {
                padding: '15px',
                background: '#1f2a40'
            }
        } >
        <
        Grid item xs = {
            6
        } > < BarChart
    series = {
        BarChart1Data
    }
    height = {
        290
    }
    xAxis = {
        [{
            data: ['18-25', '26-34', '35-45', '46-55', '56-65', '>65'],
            scaleType: 'band'
        }]
    }
    margin = {
        {
            top: 10,
            bottom: 30,
            left: 40,
            right: 10
        }
    }
    colors = {
        ['#0067ff', '#ff1ea7']
    }
    // colors={['#54c5d2', 'pink']}
    /> </Grid >
    <
    Grid item xs = {
        6
    } > < PieChart
    legends
    series = {
        [{
            data: [{
                id: 0,
                value: 10,
                label: '18-25'
            }, {
                id: 1,
                value: 15,
                label: '26-34'
            }, {
                id: 2,
                value: 20,
                label: '35-45'
            }, {
                id: 3,
                value: 20,
                label: '46-55'
            }, {
                id: 4,
                value: 20,
                label: '56-65'
            }, {
                id: 5,
                value: 20,
                label: '+65'
            }, ],
            innerRadius: 30,
            outerRadius: 120,
            paddingAngle: 2,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 280,
            cx: 150,
            cy: 150,
        }]
    }
    /> </Grid >
    <
    /Grid>     

    {
        /*<Grid item xs={4}>
                                     <BarChart
              series={ BarChart1Data}
              height={290}
              xAxis={[{ data: ['18-25','26-34','35-45', '46-55', '56-65', '>65'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              colors={['#0067ff', '#ff1ea7']}
              // colors={['#54c5d2', 'pink']}
            />
                                </Grid>
                                                      <Grid item xs={4}>
                                    <PieChart
                                    legends
          series={[
            {
              data: [
                { id: 0, value: 10, label: '18-25'  },
                { id: 1, value: 15, label: '26-34'  },
                { id: 2, value: 20, label: '35-45'  },
                { id: 3, value: 20, label: '46-55'  },
                { id: 4, value: 20, label: '56-65' },
                { id: 5, value: 20, label: '+65'  },
                ],
              innerRadius: 30,
              outerRadius: 120,
              paddingAngle: 2,
              cornerRadius: 5,
              startAngle: -90,
              endAngle: 280,
              cx: 150,
              cy: 150,
            }
          ]}
        />
                                </Grid>*/
    } <
    Grid item xs = {
            4
        } >
        <
        PieChart
    series = {
        [{
            data: [{
                id: 0,
                value: 10,
                label: '12-16'
            }, {
                id: 1,
                value: 15,
                label: '17-18'
            }, {
                id: 2,
                value: 20,
                label: '19-21'
            }, {
                id: 3,
                value: 20,
                label: '22-26'
            }, {
                id: 4,
                value: 20,
                label: '27-65'
            }, {
                id: 5,
                value: 20,
                label: '+65'
            }, ],
            innerRadius: 30,
            outerRadius: 120,
            paddingAngle: 2,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 280,
            cx: 150,
            cy: 150,
        }]
    }
    /> <
    /Grid> <
    /Grid>



    return ( < > {
            elements
        } < />)



    }