function xlbottom_case_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[37,-161.5],[37,-87.5]]).appendArc([38,-86.5],{"radius":1,"clockwise":true,"large":false}).appendPoint([72,-86.5]).appendArc([73,-85.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([73,-78.15]).appendArc([74,-77.15],{"radius":1,"clockwise":true,"large":false}).appendPoint([90,-77.15]).appendArc([91,-76.15],{"radius":1,"clockwise":false,"large":false}).appendPoint([91,-74.75]).appendArc([92,-73.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([116,-73.75]).appendArc([117,-74.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([117,-76.15]).appendArc([118,-77.15],{"radius":1,"clockwise":false,"large":false}).appendPoint([134,-77.15]).appendArc([135,-78.15],{"radius":1,"clockwise":true,"large":false}).appendPoint([135,-78.85]).appendPoint([152,-78.85]).appendArc([153,-79.85],{"radius":1,"clockwise":true,"large":false}).appendPoint([153,-95.85]).appendPoint([175,-95.85]).appendPoint([174.9665952,-180.5607011]).appendPoint([175.7801475,-181.5129197]).appendArc([175.7269591,-182.8696042],{"radius":1,"clockwise":true,"large":false}).appendPoint([159.2456263,-199.350937]).appendArc([158.0385195,-199.5098556],{"radius":1,"clockwise":true,"large":false}).appendPoint([108.2012804,-170.7363122]).appendArc([107.9901874,-170.6449804],{"radius":1,"clockwise":false,"large":false}).appendPoint([81.1413063,-162.5426428]).appendArc([80.8523993,-162.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([38,-162.5]).appendArc([37,-161.5],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.2] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlbottom_case_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        