import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const theme = createTheme();


export default function Home(params) {

    const Navigate = useNavigate()
	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<img
					src="https://image.shutterstock.com/image-photo/book-stacking-open-hardback-books-600w-520252843.jpg"
					alt="Home"
					lazyloading="true"
					width={400}
					height={350}
					style={{ marginTop: 50 }}
				/>
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						alignItems: "center",
					}}
				>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Publisher
					</Button>
					<Avatar sx={{ m: 2, bgcolor: "secondary" }}>
						<LockOutlinedIcon />
					</Avatar>
				</Box>

				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						alignItems: "center",
					}}
				>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						onClick={() => {
							Navigate("/AuthorSignIn");
						}}
					>
						Author
					</Button>
					<Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
