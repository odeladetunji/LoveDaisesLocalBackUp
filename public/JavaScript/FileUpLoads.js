    //////



    document.onreadystatechange = function()
    {
    	console.log(document.readyState);
    	if(document.readyState === "complete")
    	{


            var cristin =  document.getElementById('out1');
            cristin.addEventListener("click", displayElement);
            
            function displayElement()
            {  
                var jina = document.getElementById('cover').style.display;
                console.log(jina);
                if(jina=="block")
                {
                  console.log("if is ggggggworking!!");
                  document.getElementById('cover').style.display = "none";

              }
              if(jina=="none")
              {
                  document.getElementById('cover').style.display = "block";

              }
          }
      }

      var Vfile88 = document.getElementById('out2');
      Vfile88.addEventListener("click", Vdisplay);

      function Vdisplay()
      {
        var jina1 = document.getElementById('cover').style.display = "none";
        var jina2 = document.getElementById('out1').style.display = "none";
        var jina3 = document.getElementById('out2').style.display = "none";
        document.getElementById('videoContent').style.display = "block";
    }

    var Vfile77 = document.getElementById('out3');
    Vfile77.addEventListener("click", Adisplay);

    function Adisplay()
    {
        var jina1 = document.getElementById('cover').style.display = "none";
        var jina2 = document.getElementById('out1').style.display = "none";
        var jina3 = document.getElementById('out3').style.display = "none";
        document.getElementById('AudioContent').style.display = "block";
    }

    var Vfile44 = document.getElementById('out4');
    Vfile44.addEventListener("click", PDFdisplay);

    function PDFdisplay()
    {
        var jina1 = document.getElementById('cover').style.display = "none";
        var jina2 = document.getElementById('out1').style.display = "none";
        var jina3 = document.getElementById('out4').style.display = "none";
        document.getElementById('PDFContent').style.display = "block";
    }

    var Vfile33 = document.getElementById('out5');
    Vfile33.addEventListener("click", Worddisplay);

    function Worddisplay()
    {
        var jina1 = document.getElementById('cover').style.display = "none";
        var jina2 = document.getElementById('out1').style.display = "none";
        var jina3 = document.getElementById('out5').style.display = "none";
        document.getElementById('WordContent').style.display = "block";
    }

    var Vfile22 = document.getElementById('out6');
    Vfile22.addEventListener("click", Otherdisplay);

    function Otherdisplay()
    {
        var jina1 = document.getElementById('cover').style.display = "none";
        var jina2 = document.getElementById('out1').style.display = "none";
        var jina3 = document.getElementById('out6').style.display = "none";
        document.getElementById('OtherContent').style.display = "block";
    }

    var Vfile1 = document.getElementById('exitPage');
    Vfile1.addEventListener("click", ClickbackButton);

    function ClickbackButton()
    {
        document.getElementById('cover').style.display = "block";
        document.getElementById('out1').style.display = "block";
        document.getElementById('out2').style.display = "block";
        document.getElementById('videoContent').style.display = "none";
        document.getElementById('AudioContent').style.display = "none";
        document.getElementById('OtherContent').style.display = "none";
        document.getElementById('PDFContent').style.display = "none";
        document.getElementById('WordContent').style.display = "none";
    }

    var Vinfile = document.getElementById('exitPage1');
    Vinfile.addEventListener("click", ClickbackButton1);

    function ClickbackButton1()
    {
        document.getElementById('cover').style.display = "block";
        document.getElementById('out1').style.display = "block";
        document.getElementById('out3').style.display = "block";
        document.getElementById('videoContent').style.display = "none";
        document.getElementById('AudioContent').style.display = "none";
        document.getElementById('OtherContent').style.display = "none";
        document.getElementById('PDFContent').style.display = "none";
        document.getElementById('WordContent').style.display = "none";
    }

    var Pfile = document.getElementById('exitPage2');
    Pfile.addEventListener("click", ClickbackButton2);

    function ClickbackButton2()
    {
        document.getElementById('cover').style.display = "block";
        document.getElementById('out1').style.display = "block";
        document.getElementById('out4').style.display = "block";
        document.getElementById('videoContent').style.display = "none";
        document.getElementById('AudioContent').style.display = "none";
        document.getElementById('OtherContent').style.display = "none";
        document.getElementById('PDFContent').style.display = "none";
        document.getElementById('WordContent').style.display = "none";
    }

     var Wfile = document.getElementById('exitPage3');
    Wfile.addEventListener("click", ClickbackButton3);

    function ClickbackButton3()
    {
        document.getElementById('cover').style.display = "block";
        document.getElementById('out1').style.display = "block";
        document.getElementById('out5').style.display = "block";
        document.getElementById('videoContent').style.display = "none";
        document.getElementById('AudioContent').style.display = "none";
        document.getElementById('OtherContent').style.display = "none";
        document.getElementById('PDFContent').style.display = "none";
        document.getElementById('WordContent').style.display = "none";
    }

     var Wfile = document.getElementById('exitPage4');
    Wfile.addEventListener("click", ClickbackButton4);

    function ClickbackButton4()
    {
        document.getElementById('cover').style.display = "block";
        document.getElementById('out1').style.display = "block";
        document.getElementById('out6').style.display = "block";
        document.getElementById('videoContent').style.display = "none";
        document.getElementById('AudioContent').style.display = "none";
        document.getElementById('OtherContent').style.display = "none";
        document.getElementById('PDFContent').style.display = "none";
        document.getElementById('WordContent').style.display = "none";
    }
}
