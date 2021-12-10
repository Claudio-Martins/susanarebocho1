/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {isDark ? (
          <img width="30" height="30" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_200/https://dianaconta.pt/wp-content/uploads/2016/11/cropped-Cores_pequeno.png" alt="Logo1" />
        ) : (
          <img width="30" height="30" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_200/https://dianaconta.pt/wp-content/uploads/2016/11/cropped-Cores_pequeno.png" alt="Logo" />
        )}
        {` `}
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://google.com"
        >
          Theme
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.sapo.pt"
        >
          LekoArts
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
