import {
  CoreH3,
  CoreH6,
  CoreH4,
  CoreLayoutItem,
  CoreClasses,
  CoreBox,
  CoreTable,
  CoreTableContainer,
  CoreTableHead,
  CoreTableRow,
  CoreTableCell,
  CoreTableBody

} from "@wrappid/core";

import WrappidAppLayout from "./layouts/WrappidAppLayout";

export default function Profile() {

  function createData(name, calories, fat, carbs, protein) {
    return { calories, carbs, fat, name, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <CoreLayoutItem id={WrappidAppLayout.PLACEHOLDER.CONTENT}>
        <CoreH3 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_lighter]}>
          Profile Page
        </CoreH3>

        <CoreBox>

        </CoreBox>

        <CoreH3 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.PADDING.P1, CoreClasses.COLOR.TEXT_WARNING_LIGHT, CoreClasses.BG.BG_WARNING_LIGHT]}>
          About Me

        </CoreH3>

        <CoreH6 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_SUCCESS_LIGHT, CoreClasses.BORDER.BORDER_ROUNDED_3, CoreClasses.SHADOW.NORMAL]}>
          Full-stack developer specializing in accessible, visually appealing web applications. Certified in Core Java, MongoDB Node.js Developer Path and skilled in SDLC methodologies. Emphasizing strong communication, problem-solving, and teamwork for effective project delivery.
          My passion for development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
        </CoreH6>

        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND, CoreClasses.MARGIN.M3]}>
          <CoreBox>
            <CoreH4 styleClasses={[CoreClasses.BORDER.BORDER_ROUNDED_5, CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_GREY_A200]}>CONTACT INFORMATION
            </CoreH4>

            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>
              <CoreH6>dibakarbera01@gmail.com</CoreH6>

              <CoreH6>
                Lakshya, Mahishadal, Purba Medinipur
              </CoreH6>

              <CoreH6>
                7602978967
              </CoreH6>
            </CoreBox>

          </CoreBox>

          <CoreBox>
            <CoreH6 styleClasses={[CoreClasses.BORDER.BORDER_ROUNDED_5, CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_GREY_A200]} >Skills</CoreH6>

            <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>
              <CoreH6>Java</CoreH6>

              <CoreH6>Wrappid</CoreH6>

              <CoreH6>React js</CoreH6>
            </CoreBox>

          </CoreBox>
        </CoreBox>

        <CoreTableContainer >
          <CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_50]} aria-label="simple table">
            <CoreTableHead>
              <CoreTableRow>
                <CoreTableCell>Dessert (100g serving)</CoreTableCell>

                <CoreTableCell align="right">Calories</CoreTableCell>

                <CoreTableCell align="right">Fat&nbsp;(g)</CoreTableCell>

                <CoreTableCell align="right">Carbs&nbsp;(g)</CoreTableCell>

                <CoreTableCell align="right">Protein&nbsp;(g)</CoreTableCell>
              </CoreTableRow>
            </CoreTableHead>

            <CoreTableBody>
              {rows.map((row) => (
                <CoreTableRow
                  key={row.name}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <CoreTableCell component="th" scope="row">
                    {row.name}
                  </CoreTableCell>

                  <CoreTableCell align="right">{row.calories}</CoreTableCell>

                  <CoreTableCell align="right">{row.fat}</CoreTableCell>

                  <CoreTableCell align="right">{row.carbs}</CoreTableCell>

                  <CoreTableCell align="right">{row.protein}</CoreTableCell>
                </CoreTableRow>
              ))}
            </CoreTableBody>
          </CoreTable>
        </CoreTableContainer>
      </CoreLayoutItem>
    </>

  );
}

