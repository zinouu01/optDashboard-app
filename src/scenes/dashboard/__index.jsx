import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Nombre d'assurée par agence"
            progress="0.75"
            increase="+14%"
          />
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Nombre d'assurée par centre"
            progress="0.50"
            increase="+21%"
          />
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="312,441"
            subtitle="Nombre d'ayant droit par agence"
            progress="0.30"
            increase="+5%"
          />
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Nombre d'ayant droit par centre"
            progress="0.80"
            increase="+43%"
          />
        </Box>

        <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="FixSVG"
           gridRow="span 1"
        >

           <PieChart
           colors={['#0067ff', '#ff1ea7']}
                              legends
                              height={300}
                              series={[
                                {
                                  data: [
                                    { id: 0, value: 10,  },
  
                                    { id: 5, value: 20, },
                                  ],
                                  innerRadius: 110,
                                  outerRadius: 120,
                                  paddingAngle: 2,
                                  cornerRadius: 5,
                                  startAngle: -90,
                                  endAngle: 280,
                                  cx: 120,
                                  cy: 150,
                                }
                              ]}
                            />
                            <Typography
                            sx={{ color: colors.greenAccent[600] }}

                variant="h6"
                fontWeight="600"
                // color={colors.grey[100]}
              >
              Nbr homme/femme 
              </Typography>
        </Box>


          
        
      </Box>



{/* ROW 2 */}
        <Box
        m="20px 0"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="190px"
        gap="20px"
      >
       <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >

          <Typography
                            sx={{ color: colors.white }}

                variant="h4"
                fontWeight="600"
                style={{textAlign:"center", marginTop:15}}
                // color={colors.grey[100]}
              >
              Nombre d'odonance
              </Typography>
            <Box m="20px" display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="14px" gap="20px">
              
              <Box gridColumn="span 6" >
<BarChart
                                      series={[
  { data: [10, 32, 30, 22] },
  // { data: [100, 17, 30, 22] },
]}
                                      height={290}
                                      xAxis={[{ data: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'], scaleType: 'band' }]}
                                      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                                      colors={['#0067ff', '#ff1ea7']}
                                    /> <Typography
                            sx={{ color: colors.white }}

                variant="h6"
                fontWeight="600"
                // color={colors.grey[100]}
              >
              PAR MOIS 
              </Typography>

              </Box>
              <Box gridColumn="span 6">
                <BarChart
                                      series={[
  { data: [10, 32, 30, 22] },
  // { data: [100, 17, 30, 22] },
]}
                                      height={290}
                                      xAxis={[{ data: ['2020', '2021', '2022', '2023', '2024'], scaleType: 'band' }]}
                                      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                                      colors={['#0067ff', '#ff1ea7']}
                                    />

                                    <Typography
                            sx={{ color: colors.white }}

                variant="h6"
                fontWeight="600"
                // color={colors.grey[100]}
              >
              PAR ANNÉE
              </Typography>
              </Box>

            </Box>
                                
          </Box>

       <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box m="20px" display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="14px" gap="20px">
              
              <Box gridColumn="span 6">
<BarChart
                                      series={[
  { data: [10, 32, 30, 22] },
  // { data: [100, 17, 30, 22] },
]}
                                      height={290}
                                      xAxis={[{ data: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'], scaleType: 'band' }]}
                                      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                                      colors={['#0067ff', '#ff1ea7']}
                                    />
              </Box>
              <Box gridColumn="span 6">
                <BarChart
                                      series={[
  { data: [10, 32, 30, 22] },
  // { data: [100, 17, 30, 22] },
]}
                                      height={290}
                                      xAxis={[{ data: ['2020', '2021', '2022', '2023', '2024'], scaleType: 'band' }]}
                                      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                                      colors={['#0067ff', '#ff1ea7']}
                                    />
              </Box>

            </Box>
                                
          </Box>

      </Box>
        {/*ROW 2 END */}


    </Box>


    </>
  );
};

export default Dashboard;
