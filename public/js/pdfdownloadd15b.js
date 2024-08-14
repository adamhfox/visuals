$(window).on('load', function () {
    const rowSeparator = '--------------------\n\n';
    MktoForms2.loadForm("https://info.kaseya.com", "596-INX-704", 31777, (form) => {
        form.onSubmit(() => {
            form.vals({'commentCapture': getResultText()})
        })

        form.onSuccess(() => {
            pdfDownload();
            window.location.href = "https://www.datto.com/thank-you/"
            return false;
        })
    });

    const modalButton = document.querySelector('button.download-pdf');
    const modalBackdrop = document.querySelector('#formframe2');
    modalButton.addEventListener('click', toggleModal);
    modalBackdrop.addEventListener('click', toggleModal);

    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };

    function pdfDownload() {

        // Filled square
        doc.setFillColor(25, 158, 217)
        doc.rect(0, 0, 300, 30, 'F')

        var imgData = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE4Q0RBM0ZBNjgzQjExRTlBREJBQkFFNzZERjlEMTlFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE4Q0RBM0Y5NjgzQjExRTlBREJBQkFFNzZERjlEMTlFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkRFNkI4N0Q2NzVDMTFFOUI0RDhEOEJGRjU2M0ZEMUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkRFNkI4N0U2NzVDMTFFOUI0RDhEOEJGRjU2M0ZEMUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYF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'
        doc.addImage(imgData, 'JPEG', 20, 15, 25, 8);

        doc.setTextColor(77, 90, 100);
        doc.setFontSize(18);
        doc.setFontType("bold");
        doc.text(20, 40, 'Recovery Time & Cost Calculator Results');

        var ctleft1 = document.getElementById("pdfmain").innerHTML;
        var ctleft1p = ctleft1.replace(/<p>/g, "<p style='font-size:14px;font-family:Helvetica, Arial;color: #4d5967;line-height: 16px;'>");
        var res = ctleft1p.replace(/€/g, "EUR");
        doc.fromHTML($(res).html(), 20, 45, {
            'width': 170,
            'elementHandlers': specialElementHandlers,
        });

        var title1 = document.getElementById("currenttitle").innerHTML;
        var cleanText1 = title1.replace(/<\/?[^>]+(>|$)/g, "");
        doc.text(20, 145, cleanText1);

        var ct1 = document.getElementById("current1").innerHTML;
        var ct1p = ct1.replace(/<p/g, "<p style='font-size:14px;font-family:Helvetica, Arial;color: #4d5967; font-weight:bold; line-height: 16px;' ");
        var ct1h6 = ct1p.replace(/<h6/g, "<h6 style='font-size:20px;font-family:Helvetica, Arial;color: #4d5967; font-weight:normal; line-height: 16px;' ");
        doc.fromHTML($(ct1h6).html(), 20, 150, {
            'width': 100,
            'elementHandlers': specialElementHandlers,
        });

        var ct2 = document.getElementById("current2").innerHTML;
        var ct2p = ct2.replace(/<p/g, "<p style='font-size:14px; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:bold; line-height: 16px; margin-bottom:5px;' ");
        var ct2h6 = ct2p.replace(/<h6/g, "<h6 style='font-size:20px; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:normal; line-height: 16px; margin-bottom:5px;' ");
        var ct2span = ct2h6.replace(/<span/g, "<span style='width:100%; float:left; font-size:8px; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:normal; line-height: 11px; margin-bottom:5px;' ");
        doc.fromHTML($(ct2span).html(), 20, 170, {
            'width': 100,
            'elementHandlers': specialElementHandlers,
        });


        var current3 = document.getElementById("current3").innerHTML;
        var res3 = current3.replace(/€/g, "EUR");
        var ct3p = res3.replace(/<p/g, "<p style='font-size:14px; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:bold; line-height: 16px; margin-bottom:5px;' ");
        var ct3h6 = ct3p.replace(/<h6/g, "<h6 style='font-size:14px; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:normal; line-height: 16px; margin-bottom:5px;' ");
        var ct3span = ct3h6.replace(/<span/g, "<br/><span style='width:100%; float:left; font-size:8px; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:normal; line-height: 11px; margin-bottom:5px;' ");
        var ct3span2 = ct3span.replace(/<strong/g, "<strong style='font-size:14px!important;'");
        doc.fromHTML($(ct3span2).html(), 20, 200, {
            'width': 70,
            'elementHandlers': specialElementHandlers,
        });

        var title2 = document.getElementById("dattotitle").innerHTML;
        var cleanText2 = title2.replace(/<\/?[^>]+(>|$)/g, "");
        doc.text(120, 145, cleanText2);

        var dt1 = document.getElementById("datto1").innerHTML;
        var dt1p = dt1.replace(/<p/g, "<p style='font-size:14px;font-family:Helvetica, Arial;color: #4d5967; font-weight:bold; line-height: 16px;' ");
        var dt1h6 = dt1p.replace(/<h6/g, "<h6 style='font-size:14px;font-family:Helvetica, Arial;color: #4d5967; font-weight:normal; line-height: 16px;' ");
        doc.fromHTML($(dt1h6).html(), 120, 150, {
            'width': 70,
            'elementHandlers': specialElementHandlers,
    });

        var dt2 = document.getElementById("datto2").innerHTML;
        var dt2p = dt2.replace(/<p/g, "<p style='font-size:14px; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:bold; line-height: 16px; margin-bottom:5px;' ");
        var dt2h6 = dt2p.replace(/<h6/g, "<h6 style='font-size:14px; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:normal; line-height: 16px; margin-bottom:5px;' ");
        var dt2span = dt2h6.replace(/<span/g, "<span style='width:100%; float:left; font-size:8px; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:normal; line-height: 11px; margin-bottom:5px;' ");
        doc.fromHTML($(dt2span).html(), 120, 170, {
            'width': 70,
            'elementHandlers': specialElementHandlers,
        });

        var dt3 = document.getElementById("datto3").innerHTML;
        var dt3p = dt3.replace(/<p/g, "<p style='font-size:14px; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:bold; line-height: 16px; margin-bottom:5px;' ");
        var dt3h6 = dt3p.replace(/<h6/g, "<h6 style='font-size:14px; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:normal; line-height: 16px; margin-bottom:5px;' ");
        var dt3span = dt3h6.replace(/<span/g, "<br/><span style='width:100%; float:left; margin-top:0; font-family:Helvetica, Arial;color: #4d5967; font-weight:normal; line-height: 11px; margin-bottom:5px;' ");
        var dt3span2 = dt3span.replace(/<strong/g, "<strong style='font-size:14px!important;'");
        doc.fromHTML($(dt3span).html(), 120, 200, {
            'width': 70,
            'elementHandlers': specialElementHandlers,
        });

        doc.setTextColor(77, 90, 100);
        doc.setFontSize(18);
        doc.setFontType("bold");
        doc.text(20, 250, 'Inputs');

        var data1 = document.getElementById("rtodatatxt").innerHTML;
        var data2 = data1.replace(/€/g, "EUR");
        var data3 = data2.replace(/<p/g, "<p style='font-size:14px; font-family:Helvetica, Arial;color: #4d5967; font-weight:normal; line-height: 18px;' ");
        doc.fromHTML($(data3).html(), 20, 255, {
            'width': 170,
            'elementHandlers': specialElementHandlers,
        });


        doc.setTextColor(200, 200, 200)
        doc.setFontSize(6)
        doc.text(20, 285, 'Corporate Headquarters: 101 Merritt 7, Norwalk, CT 06851 USA, partners@datto.com, +1 888 294 6312\n')

        doc.save('Datto-RTO-Calculator.pdf');
    };

    var rangeSlider = document.getElementById("rs-range-line");
    var rangeBullet = document.getElementById("rs-bullet");

    function showSliderValue() {
        rangeBullet.innerHTML = rangeSlider.value;
        var bulletPosition = (rangeSlider.value / rangeSlider.max);
        rangeBullet.style.left = (bulletPosition * 100) + "%";
    }

    function toggleModal() {
        document.querySelector('body').classList.toggle('formdisplay2');
    }

    function getResultText () {
        let calculatorResultText = '';
        let $formFieldTarget = document.querySelector('section.top')
        let $formInputFields = $formFieldTarget.querySelectorAll('.inputfield')
        let $resultsTarget = document.querySelector('#numberresults');

        calculatorResultText += rowSeparator
        calculatorResultText += 'Recovery & Data Storage\n\n';
        calculatorResultText += rowSeparator
        $formInputFields.forEach(($row) => {
            calculatorResultText += `${$row.childNodes[2].innerText} - ${$row.querySelector('input').value}\n\n`;
        })
        calculatorResultText += rowSeparator
  
        calculatorResultText += 'Calculator Results\n\n';
        calculatorResultText += rowSeparator
        calculatorResultText += `${$resultsTarget.querySelector('#currenttitle').innerText}\n\n`;
        calculatorResultText += rowSeparator
        calculatorResultText += `${$resultsTarget.querySelector('#current1').textContent}\n\n`;
        calculatorResultText += `${$resultsTarget.querySelector('#current2').textContent}\n\n`;
        calculatorResultText += `-- Summary --\n\n`;
        [...$resultsTarget.querySelectorAll('#current3 h6')].forEach((row) => {
            calculatorResultText += `${row.textContent}\n\n`
        })
        calculatorResultText += rowSeparator

        calculatorResultText += `${$resultsTarget.querySelector('#dattotitle').innerText}\n\n`;
        calculatorResultText += rowSeparator
        calculatorResultText += `${$resultsTarget.querySelector('#datto1').textContent}\n\n`;
        calculatorResultText += `${$resultsTarget.querySelector('#datto2 .restitle').innerText} ${$resultsTarget.querySelector('#datto2 h6').childNodes[0].textContent}\n\n`;
        calculatorResultText += `-- Summary --\n\n`;
        [...$resultsTarget.querySelectorAll('#datto3 h6')].forEach((row) => {
            calculatorResultText += `${row.textContent}\n\n`
        })

        return calculatorResultText;
    }
});
