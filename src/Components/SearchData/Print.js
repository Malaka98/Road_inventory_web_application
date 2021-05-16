import cv from "./UnicodeConvert";

import pdfMake, { fonts } from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const printPDF = async (
  picUrl,
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  data10,
  data11,
  table,
  table2
) => {
  //   console.log(dd.content[3].table.body);
  console.log(cv(data1));
  //  let tt = await cv(data1);

  const dd = {
    content: [
      {
        text: `ud¾. bkafjkag%sh - kd;a;kaäh m%dfoaYSh iNdj\n\n`,
        style: "header",
      },
      {
        columns: [
          {
            width: "60%",
            text: `.u$k.rh ( - ${cv(data1)}\n\nud¾.fha ku ( -${cv(
              data2
            )}\n\nmgka .kakd ia:dkh ( -${cv(data3)}\n\nwjika jk ia:dkh ( -${cv(
              data4
            )}\n\n.%du ks,OdÍ jiu ( -${cv(data5)}\n\nuka;%S fldÜgdih ( -${cv(
              data6
            )}\n\núÿ,s lKq .Kk ( -${data7}\n\núÿ,s myka .Kk ( -${data8}\n\n.eiÜ lr we;akï .eiÜ m;%fha wxlh yd Èkh ${cv(
              data10
            )} ${cv(data11)}\n\nkdu mqjrejla fhdod ;sfío@ ( - ${data9}\n\n`,

            style: "text",
          },
          {
            image: "snow",
            width: 200,
            height: 200,
            alignment: "right",
          },
        ],
      },
      "\n\n",
      {
        style: "tableExample",
        table: {
          headerRows: 1,
          // dontBreakRows: true,
          // keepWithHeaderRows: 1,
          body: [
            [
              { text: `Èkh`, style: "tableHeader" },
              {
                text: `;dr oud we;s ÿr óg¾`,
                style: "tableHeader",
              },
              {
                text: `fndr¿ oud we;s ÿr óg¾`,
                style: "tableHeader",
              },
              {
                text: `fldkal%SÜ lr we;s ÿr óg¾`,
                style: "tableHeader",
              },
              {
                text: `leg .,a w;=rd we;s ÿr óg¾`,
                style: "tableHeader",
              },
              { text: `uq¨ ÿr óg¾`, style: "tableHeader" },
              { text: `m<, óg¾`, style: "tableHeader" },
              { text: `md,ï`, style: "tableHeader" },
              {
                text: `fmÜá fndalal=`,
                style: "tableHeader",
              },
              {
                text: `ldKq leg fh¥ ia:dk`,
                style: "tableHeader",
              },
              {
                text: `im;a;= md,ï`,
                style: "tableHeader",
              },
            ],
          ],
        },
      },
      "\n\n",
      {
        style: "tableExample",
        table: {
          headerRows: 1,
          // dontBreakRows: true,
          // keepWithHeaderRows: 1,
          body: [
            [
              { text: `Èkh`, style: "tableHeader", margin: [2, 2, 2, 2] },
              {
                text: `iúl< WmlrK $ isÿ l, w¨;ajeähdj lrk ,o jeä ÈhqKq lsÍu $ m%;sixialrKh`,
                style: "tableHeader",
                margin: [125, 2, 125, 2],
              },
              {
                text: `fndr¿ oud we;s ÿr óg¾`,
                style: "tableHeader",
                margin: [2, 2, 2, 2],
              },
            ],
          ],
        },
      },
    ],
    defaultStyle: {
      font: "FMabhaya",
    },
    images: {
      mySuperImage: "data:image/jpeg;base64,...content...",

      // in browser is supported loading images via url (https or http protocol) (minimal version: 0.1.67)
      snow: picUrl,
    },
    styles: {
      header: {
        fontSize: 25,
        alignment: "center",

        text: {
          fontSize: 18,
        },
        tableExample: {
          margin: [0, 10, 0, 10],
        },
        tableHeader: {
          bold: true,
          fontSize: 11,
          color: "black",
        },
      },
    },
  };

  pdfMake.fonts = {
    FMabhaya: {
      normal: "fm_abhay.TTF",
      bold: "fm_abhay.TTF",
      italics: "fm_abhay.TTF",
      bolditalics: "fm_abhay.TTF",
    },
  };

  await table.map((value, key) => {
    let arr = [];
    arr.push(cv(value.T1data1.toString()));
    arr.push(cv(value.T1data2.toString()));
    arr.push(cv(value.T1data3.toString()));
    arr.push(cv(value.T1data4.toString()));
    arr.push(cv(value.T1data5.toString()));
    arr.push(cv(value.T1data6.toString()));
    arr.push(cv(value.T1data7.toString()));
    arr.push(value.T1data8);
    arr.push(value.T1data9);
    arr.push(value.T1data10);
    arr.push(value.T1data11);
    return dd.content[3].table.body.push(arr);
  });

  if (table2.length != 0) {
    await table2.map((value, key) => {
      let arr = [];
      arr.push(cv(value.T2data3.toString()));
      arr.push(cv(value.T2data1.toString()));
      arr.push(cv(value.T2data2.toString()));
      return dd.content[5].table.body.push(arr);
    });
  } else {
    let arr = [];
    arr.push("No data ");
    arr.push("No Data ");
    arr.push("No Data ");
    dd.content[5].table.body.push(arr);
    console.log("No Data******************");
  }

  pdfMake.createPdf(dd, fonts).open();
  // console.log(dd);
};

export { printPDF };
