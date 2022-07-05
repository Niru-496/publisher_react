import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router";
import { storage } from "../../utils/firebase";

const theme = createTheme();

export default function BookUplaod() {


	const uploadFiles = (file) => {
		//
		if (!file) return;
		const sotrageRef = ref(storage, `files/${file.name}`);
		const uploadTask = uploadBytesResumable(sotrageRef, file);

		uploadTask.on(
			"state_changed",
			(error) => console.log(error),
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log("File available at", downloadURL);
				});
			}
		);
	};
	const Navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();

		const file = event.target[0].files[0];
		uploadFiles(file);
		const data = new FormData(event.currentTarget);
		console.log({
			title: data.get("title"),
			file: data.get("file"),
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						Uplaod A Book
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="Title"
							label="Title of the Book"
							name="Title"
							autoFocus
						/>
						<input
							type="file"
							className="input"
							id="file"
							fullWidth
							name="file"
							label="file"
						/>

						<TextField
							margin="normal"
							required
							fullWidth
							id="Summary"
							label="Summary of the Book"
							name="Summary"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="Authors"
							label="Number of Authors"
							name="Authors"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="Remark"
							label="Remark"
							name="Remark"
							autoFocus
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						
						>
							Upload Book
						</Button>
						<Grid container>
							<Grid
								item
								onClick={() => {
									Navigate("/AuthorDashBoard");
								}}
							>
								<Link variant="body2">{"Go to DashBoard"}</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
