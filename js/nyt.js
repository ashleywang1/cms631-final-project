/**
 * This work is derived from:
 *  - https://bl.ocks.org/mbostock/4198499
 *  - https://gist.github.com/anbnyc/a83ec925d25871db80e45e04c4233736
 */
function makePaint(selector, callback) {
    const bars = 10;
    let w = window.innerWidth / 2;
    let h = window.innerHeight;

    let svg = d3.select(selector)
        .attr("width", w)
        .attr("height", h);

    let background = svg.append("rect")
        .attr("class","background")
        .attr("width",w)
        .attr("height",h);

    let bands = svg.append("g");
    bands.selectAll("rect.band")
        .data(_.range(bars))
        .enter()
        .append("rect")
        .attr("height",h)
        .attr("width",w/bars)
        .attr("class", "band")
        .attr("x",i=>i*w/bars);

    let line = d3.line()
        .x(d=>d[0])
        .y(d=>d[1]);

    let pathdata = {};
    let path = svg.append("path")
    .attr("class","line");

    background
        .on("mousedown",()=>{
            background
                .on("mousemove",function(d,i){
                    position = Math.round(d3.event.offsetX/(w/bars));
                    pathdata[position] = [position*w/bars,d3.mouse(this)[1]];
                    path.datum(_.values(pathdata)).attr("d",line);
                })
                .on("mouseup",()=>{
                    background
                        .on("mousemove",null)
                        .on("mouseup",null);
                    if (callback) callback(pathdata)
                });
        });
}