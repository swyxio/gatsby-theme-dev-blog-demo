import React from "react"
import profilePic from "gatsby-theme-dev-blog/src/assets/profile-pic.jpg"
import { rhythm } from "gatsby-theme-dev-blog/src/utils/typography"

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Dan Abramov`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: "50%",
          }}
        />
        <p style={{ maxWidth: 310 }}>
          This is a gatsby theme dev blog inspired by Dan Abramov. <br />
          This Bio component overrides the default that ships with the theme.
        </p>
      </div>
    )
  }
}

export default Bio
