import { Box } from "@mui/material";
import ProfileSection from "./components/ProfileSection";
import TabComponents from "./components/TabComponents";

export default function Home() {
  return (
    <Box className="flex w-[1280px] m-auto gap-4 py-5">
      <Box flex={1} className='pt-[100px]'>
        <ProfileSection/>
      </Box>
      <Box flex={3}>
        <TabComponents/>
      </Box>
    </Box>
  );
}
