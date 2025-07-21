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
              subtitle="Nombre totale des assurés"
              progress="0.75"
              // increase="+14%"
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
              subtitle="Nombre d'assurés par centres alger"
              progress="0.50"
              // increase="+21%"
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
              subtitle="Nombre totale des ayants droit"
              progress="0.30"
              // increase="+5%"
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
              subtitle="Nombre d'ayant droit par centres alger"
              progress="0.80"
              // increase="+43%"
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
                    { id: 0, value: 10 },
                    { id: 5, value: 20 },
                  ],
                  innerRadius: 95,
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
              style={{ textAlign: "center", marginTop: 15 }}
            >
              Nombre d'odonance
            </Typography>
            <Box
              m="20px"
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gridAutoRows="14px"
              gap="20px"
            >
              <Box gridColumn="span 6">
                <BarChart
                  series={[
                    { data: [1000, 1320, 1500, 1200,1432,2000,1230,1700,1050,1483,1990,1600] },
                  ]}
                  height={290}
                  xAxis={[{ data: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'], scaleType: 'band' }]}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                  colors={['#FFCCCC', '#93c572']}
                />
                <Typography
                align="center"
                  sx={{ color: colors.white }}
                  variant="h6"
                  fontWeight="600"
                >
                  PAR MOIS
                </Typography>
              </Box>
              <Box gridColumn="span 6">
                <BarChart
                  series={[
                    { data: [4322, 3230, 3000, 2021,3005] },
                  ]}
                  height={290}
                  xAxis={[{ data: ['2020', '2021', '2022', '2023', '2024'], scaleType: 'band' }]}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                  colors={['#C3ABD0']}
                />
                <Typography
                align="center"
                  sx={{ color: colors.white }}
                  variant="h6"
                  fontWeight="600"
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
            <Typography
            align="center"
              sx={{ color: colors.white }}
              variant="h4"
              fontWeight="600"
              style={{ textAlign: "center", marginTop: 15 }}
            >
            Montant réel
            </Typography>
            <Box
              m="20px"
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gridAutoRows="14px"
              gap="20px"
            >
              <Box gridColumn="span 6">
                <BarChart
                  series={[
                    { data: [1000, 3340, 1500, 2230,4322,2300,4230,1734,1034,1487,1967,1606] },
                  ]}
                  height={290}
                  xAxis={[{ data: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'], scaleType: 'band' }]}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                  colors={['#99FFFF']}
                />
                <Typography
                align="center"
                  sx={{ color: colors.white }}
                  variant="h6"
                  fontWeight="600"
                >
                  PAR MOIS
                </Typography>
              </Box>
              <Box gridColumn="span 6">
                <BarChart
                  series={[
                    { data: [4322, 3234, 3430, 2029,3005] },
                  ]}
                  height={290}
                  xAxis={[{ data: ['2020', '2021', '2022', '2023', '2024'], scaleType: 'band' }]}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                  colors={['#A9C4EB', '#ff1ea7']}
                />
                <Typography
                align="center"
                  sx={{ color: colors.white }}
                  variant="h6"
                  fontWeight="600"
                >
                  PAR ANNÉE
                </Typography>
              </Box>
            </Box>
          </Box>

          
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
