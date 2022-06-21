import _ from "lodash";

// view 1 mit filter für kleinere datenmengen:
export async function b1(aRl, aSequelize) {
    const [view1, metadata] = await aSequelize.query("SELECT * from view1_studios");
    console.log(view1)
    await aRl.question("What do you want to filter for?", (aInput) => {
        console.log(view1.filter((iCol) => _.some(iCol, iValue => _.includes(iValue, aInput))));
        aRl.close();
    })
}
