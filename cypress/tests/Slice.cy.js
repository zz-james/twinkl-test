import React from "react";
import { mount as cypressMount } from "@cypress/react";

import Slice from "../../src/Slice";
import { initialState } from "../../src/foregroundSlice";

const { frontImages } = initialState;

const defaultProps = {
  id: 1,
  sliceSize: {
    width: 848,
    height: 477,
  },
  slices: 3,
  frontImage: {
    ...frontImages[0],
  },
  backgroundImageSrc:
    "https://www.teahub.io/photos/full/256-2563481_painting.jpg",
};

const mount = (props) => cypressMount(<Slice {...defaultProps} {...props} />);

// Does image forground image overflow container?
// All Slice containers are the same except for the background offset so we can just look at a single slice
// whether of not the image overflows the canvas depends on the scaling of the foreground image
// by default this was 283px but we can test different sizes and assert if they fit into the height of the
// container (since we know the width this is trivial to work out for width overflow )

describe("<Slice />", () => {
  it("renders  with image1 at default render width", () => {
    const foregroundRenderWidth = 50;
    mount({
      foregroundRenderWidth,
    });
    cy.viewport(1075, 800);

    const foreGroundScaling =
      foregroundRenderWidth / defaultProps.frontImage.width;
    const foregroundImageHeight =
      defaultProps.frontImage.height * foreGroundScaling;

    cy.log(foregroundImageHeight);

    cy.get('[data-testid="foreground"]', { withinSubject: null }).should(
      "exist"
    );

    cy.get('[data-testid="background"]', { withinSubject: null })
      .invoke("height")
      .should("gte", foregroundImageHeight);
  });

  it("renders with image1 at 50px render width", () => {
    const foregroundRenderWidth = 50;
    mount({
      foregroundRenderWidth,
    });
    cy.viewport(1075, 800);

    const foreGroundScaling =
      foregroundRenderWidth / defaultProps.frontImage.width;
    const foregroundImageHeight =
      defaultProps.frontImage.height * foreGroundScaling;

    cy.log(foregroundImageHeight);

    cy.get('[data-testid="foreground"]', { withinSubject: null }).should(
      "exist"
    );

    cy.get('[data-testid="background"]', { withinSubject: null })
      .invoke("height")
      .should("gte", foregroundImageHeight);
  });

  it("renders with foreground outside background container image1 at 500px render width", () => {
    const foregroundRenderWidth = 500;
    mount({
      foregroundRenderWidth,
    });
    cy.viewport(1075, 800);

    const foreGroundScaling =
      foregroundRenderWidth / defaultProps.frontImage.width;
    const foregroundImageHeight =
      defaultProps.frontImage.height * foreGroundScaling;

    cy.log(foregroundImageHeight);

    cy.get('[data-testid="foreground"]', { withinSubject: null }).should(
      "exist"
    );

    cy.get('[data-testid="background"]', { withinSubject: null })
      .invoke("height")
      .should("gte", foregroundImageHeight);
  });
});
