/**
 * This work is derived from:
 *  - https://bl.ocks.org/mbostock/4198499
 *  - https://gist.github.com/anbnyc/a83ec925d25871db80e45e04c4233736
 */
function make_graph(selector, callback) {
  const w = 720;
  const h = 360;
  const datalen = 10;

  let svg = d3.select(selector)
    .attr("width",w)
    .attr("height",h);

  let background = svg.append("rect")
    .attr("class","background")
    .attr("width",w)
    .attr("height",h);

  let bands = svg.append("g")
  bands.selectAll("rect.band")
    .data(_.range(datalen))
    .enter()
    .append("rect")
    .attr("height",h)
    .attr("width",w/datalen)
    .attr("class","band")
    .attr("x",d=>d*w/datalen);

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
          position = Math.round(d3.event.offsetX/(w/datalen));
          pathdata[position] = [position*w/datalen,d3.mouse(this)[1]];
          path.datum(_.values(pathdata)).attr("d",line);
          if (callback) callback(pathdata);
        })
        .on("mouseup",()=>{
          background
            .on("mousemove",null)
            .on("mouseup",null);
        });
    });
}
