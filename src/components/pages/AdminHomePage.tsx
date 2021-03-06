import * as React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Route } from "react-router";
import Navbar, { NavbarTab } from "../common/Navbar";
import logo from "../../images/uts-logo.png";
import Footer from "../common/Footer";
import Auth from "../../logic/functions/core/Auth";
import LoginPage from "./LoginPage";
import navbarTabs from "./__data__/data.adminNavbarTabs.json";
import AdminSessionContainer from "../containers/AdminDashboard/AdminSessionContainer";
import BookSessionContainer from "../containers/AdminDashboard/BookSessionContainer";
import AdminWorkshopsOverviewContainer from "../containers/AdminDashboard/AdminWorkshopsOverviewContainer";
import AdminWorkshopCreateContainer from "../containers/AdminDashboard/AdminWorkshopCreateContainer";
import ReportsContainer from "../containers/AdminDashboard/ReportsContainer";
import AdminWorkshopSessionDetails from "../containers/AdminDashboard/AdminWorkshopSessionDetails";

interface AdminHomePageProps {
	auth: Auth;
	props: any;
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	logo: {
		height: "10%",
		width: "10%"
	}
}));

const AdminHomePage: React.FunctionComponent<AdminHomePageProps> = ({ auth, props }) => {
	const classes = useStyles();
	const { path } = props.match;
	return (
		<div>
			<Navbar auth={auth} path={path} navbarTabs={navbarTabs as Array<NavbarTab>}>
				<img src={logo} className={classes.logo} alt="UTS Logo" />
				<Typography variant="h2">UTS: HELPS</Typography>
			</Navbar>
			<div>
				<Route path={`${path}/login`} render={() => <LoginPage auth={auth} />} />
				<Route
					path={`${path}/sessions`}
					render={props => <AdminSessionContainer {...props} />}
				/>
				<Route path={`/admin/bookSession`} render={props => <BookSessionContainer />} />
				<Route
					exact
					path={`${path}/workshops`}
					render={props => <AdminWorkshopsOverviewContainer {...props} />}
				/>
				<Route
					exact path={`${path}/workshops/amenddetails/:workshopId/amendsession/:sessionId`}
					render={props => <AdminWorkshopSessionDetails />}
				/>
				<Route
					exact path={`${path}/workshops/amenddetails/:workshopId`}
					render={props => <AdminWorkshopCreateContainer />}
				/>
				<Route
					path={`${path}/reports`}
					render={props => <ReportsContainer />}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default AdminHomePage;
