import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

import React from "react";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const {
    isLoading: isloading2,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isloading3 } = useCabins();
  if (isLoading || isloading2) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        confirmedStays={confirmedStays}
        bookings={bookings}
        numDays={numDays}
        countCabins={cabins.length}
      />
      <TodayActivity/>
      <DurationChart confirmedStays={confirmedStays}/>
      <SalesChart numDays={numDays} bookings={bookings} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
