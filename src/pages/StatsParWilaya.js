import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import centres from './data.json';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const wilayasAlgerie = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar",
  "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger",
  "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma",
  "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh",
  "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued",
  "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent",
  "Ghardaïa", "Relizane", "El M'Ghair", "El Menia", "Ouled Djellal", "Bordj Baji Mokhtar",
  "Beni Abbes", "Timimoun", "Touggourt", "Djanet", "In Salah","In Guezzam"
];

const BarChart1Data = [
  { data: [39, 65, 77, 44,56,44] },
  { data: [90, 50, 89, 77,80,43] },
];

export default function StatsParCentre() {
  React.useEffect(() => {
    // console.log('centres', centres)
  }, []);

  const [wilaya, WilayaSet] = React.useState('');
  const [centreList, centreListSet] = React.useState([]);
  const [centre, centreSet] = React.useState([]);

  function handleChange({ target }) {
    WilayaSet(target.value);
    console.log('--- target.value', target.value);
    let agenceId = wilayasAlgerie.indexOf(target.value) + 1;
    if (agenceId !== -1) {
      centreListSet(centres.filter(el => el.codeAg == agenceId));
    }
  }

  const elements = (
    <Grid container spacing={2} style={{ padding: '45px' }}>
      <Grid container xs={12}>
          <Grid item xs={12}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="wilaya-select-label">Sélectionner Wilaya</InputLabel>
            <Select
              labelId="wilaya-select-label"
              id="wilaya-select"
              value={wilaya}
              label="Choisissez wilaya"
              onChange={handleChange}
            >
              {wilayasAlgerie.map((singleWilaya, i) => (
                <MenuItem key={i} value={singleWilaya}>{singleWilaya}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      {/*<Grid item xs={6}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="centre-select-label">Sélectionner Centre</InputLabel>
            <Select
              labelId="centre-select-label"
              id="centre-select"
              value={centre}
              label="Choisissez centre"
              onChange={(el) => { centreSet(el.target.value); }}
            >
              {centreList.map((singleCentre, i) => (
                <MenuItem key={i} value={singleCentre}>{singleCentre.Adrcen}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>*/}
      </Grid>

        <Grid container xs={12}  className="bg" style={{ display: 'flex', alignItems: 'center', height: 'calc(100vh - 30vh)', margin:'0!important' }}>
                  <Grid container xs={8} spacing={0} className="bg-graph" style={{marginLeft: -10}}>

                        <div className="w-full"><h2 className="tac ">Assuré</h2></div>
                        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-grid-xs-12 css-1m7xyc9-MuiGrid-root flex" style={{    
    width: '100%',
    display: 'flex',
    maxWidth: '100%',
    flexBasis: 'auto'}}>
                            <div className=" MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1osj8n2-MuiGrid-root" >
                                 <BarChart
                                      series={BarChart1Data}
                                      height={290}
                                      xAxis={[{ data: ['18-25', '26-34', '35-45', '46-55', '56-65', '>65'], scaleType: 'band' }]}
                                      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                                      colors={['#0067ff', '#ff1ea7']}
                                    />
                                    <h3 className="tac upper"> tranche d'age par sexe</h3>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1osj8n2-MuiGrid-root">
                                <PieChart
                              legends
                              height={290}
                              series={[
                                {
                                  data: [
                                    { id: 0, value: 30, label: '18-25' },
                                    { id: 1, value: 35, label: '26-34' },
                                    { id: 2, value: 20, label: '35-45' },
                                    { id: 3, value: 25, label: '46-55' },
                                    { id: 4, value: 15, label: '56-65' },
                                    { id: 5, value: 10, label: '+65' },
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
                              colors={['#33FFFF', '#66B2FF', '#FF33FF', '#9933FF', '#E6E6E6', '#FF9999']}
                            />
                             <h3 className="tac upper mlm"> tranche d'age</h3>
                            </div>
                        </div>
                        {/*<Grid item xs={6}>
                            <BarChart
                              series={BarChart1Data}
                              height={290}
                              xAxis={[{ data: ['18-25', '26-34', '35-45', '46-55', '56-65', '>65'], scaleType: 'band' }]}
                              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                              colors={['#0067ff', '#ff1ea7']}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <PieChart
                              legends
                              height={290}
                              series={[
                                {
                                  data: [
                                    { id: 0, value: 10, label: '18-25' },
                                    { id: 1, value: 15, label: '26-34' },
                                    { id: 2, value: 20, label: '35-45' },
                                    { id: 3, value: 20, label: '46-55' },
                                    { id: 4, value: 20, label: '56-65' },
                                    { id: 5, value: 20, label: '+65' },
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
                        </Grid>*/}
                    </Grid>
      <Grid item xs={4} className="bg-graph" style={{marginLeft: 10}}>
        <h2 className="tac  mlm"> Ayant droit</h2>
        <PieChart
          height={290}
          series={[
            {
              data: [
                { id: 0, value: 10, label: '12-16' },
                { id: 1, value: 15, label: '17-18' },
                { id: 2, value: 20, label: '19-21' },
                { id: 3, value: 20, label: '22-26' },
                { id: 4, value: 20, label: '27-65' },
                { id: 5, value: 20, label: '+65' },
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
          colors={['#33FFFF', '#66B2FF', '#FF33FF', '#9933FF', '#E6E6E6', '#FF9999']}
        />
        <h3 className="tac upper mlm"> tranche d'age</h3>
      </Grid>
        </Grid>
    </Grid>
  );
// 
  return (
    <div >
      {elements}
    </div>
  );
}
