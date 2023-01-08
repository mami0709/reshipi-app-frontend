import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SerchInput } from "components/Atoms/SerchInput";
import HumbergerMenu from "components/Atoms/HumbergerMenu";
import { IconButton, Badge } from "@mui/material";
import { TfiWrite } from "react-icons/tfi";
import { IconContext } from "react-icons";
import { HiUser } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";

// AppComandBarのTODO
// ✔️ログインなどのボタンを右よせ 完了
// ✔️インプットフィールドの幅調整
// ✔️インプットフィールドのアイコン調整
// ✔️ログインなどのアイコン挿入
// ・タイトルクリックできるように
// ・レスポンシブの設定(デザインまだ)
// ・適時コンポーネントを分離





export default function AppComandBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <HumbergerMenu />
          <Box display={"flex"}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "block",
                  sm: "block",
                  color: "#FFB48A",
                  fontWeight: "bold",
                },
                fontSize: {
                  xs:"1.4rem",
                  sm: "1.8rem"
                },
                margin: {xs: "0px auto"},
                paddingRight: "20px",
              }}
            >
              レシピアプリ
            </Typography>

            <SerchInput />
          </Box>

          {/* PCのログイン、レシピ投稿などのサブタイトル */}
          <Box
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: "auto" }}
          >
            <Box sx={{ display: "flex" }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="primary"
                sx={{ display: "flex", flexFlow: "column" }}
              >
                <IconContext.Provider
                  value={{ color: "#FFB48A", size: "2rem" }}
                >
                  <TfiWrite />
                </IconContext.Provider>
                <Typography
                  sx={{
                    color: "#FFB48A",
                    textAlign: "center",
                    fontSize: "11px",
                    paddingTop: "10px",
                  }}
                >
                  レシピ投稿
                </Typography>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="primary"
                sx={{ display: "flex", flexFlow: "column" }}
              >
                <IconContext.Provider
                  value={{ color: "#FFB48A", size: "2rem" }}
                >
                  <HiUser />
                </IconContext.Provider>
                <Typography
                  sx={{
                    color: "#FFB48A",
                    textAlign: "center",
                    fontSize: "11px",
                    paddingTop: "10px",
                  }}
                >
                  無料会員登録
                </Typography>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="primary"
                sx={{ display: "flex", flexFlow: "column" }}
              >
                <IconContext.Provider
                  value={{ color: "#FFB48A", size: "2rem" }}
                >
                  <FiLogIn />
                </IconContext.Provider>
                <Typography
                  sx={{
                    color: "#FFB48A",
                    textAlign: "center",
                    fontSize: "11px",
                    paddingTop: "10px",
                  }}
                >
                  ログイン
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav"></Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
