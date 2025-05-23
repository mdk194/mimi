function bottom_case_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[39,-159.5],[39,-89.5]]).appendArc([40,-88.5],{"radius":1,"clockwise":true,"large":false}).appendPoint([74,-88.5]).appendArc([75,-87.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([75,-80.15]).appendArc([76,-79.15],{"radius":1,"clockwise":true,"large":false}).appendPoint([92,-79.15]).appendArc([93,-78.15],{"radius":1,"clockwise":false,"large":false}).appendPoint([93,-76.75]).appendArc([94,-75.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([114,-75.75]).appendArc([115,-76.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([115,-78.15]).appendArc([116,-79.15],{"radius":1,"clockwise":false,"large":false}).appendPoint([132,-79.15]).appendArc([133,-80.15],{"radius":1,"clockwise":true,"large":false}).appendPoint([133,-80.85]).appendPoint([150,-80.85]).appendArc([151,-81.85],{"radius":1,"clockwise":true,"large":false}).appendPoint([151,-97.85]).appendPoint([173,-97.85]).appendPoint([172.8455742,-181.2956232]).appendPoint([173.0179125,-181.5200288]).appendArc([172.9319149,-182.8362213],{"radius":1,"clockwise":true,"large":false}).appendPoint([159.2456263,-196.5225099]).appendArc([158.0385195,-196.6814285],{"radius":1,"clockwise":true,"large":false}).appendPoint([110.6604952,-169.3277135]).appendArc([110.4281443,-169.2302224],{"radius":1,"clockwise":false,"large":false}).appendPoint([79.1313379,-160.5364835]).appendArc([78.8636888,-160.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([40,-160.5]).appendArc([39,-159.5],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.2] });
}


function standoff_extrude_2_4_outline_fn(){
    return CAG.circle({"center":[150.1470521,-176.0640206],"radius":2.15})
.union(
    CAG.circle({"center":[131,-150.85],"radius":2.15})
).union(
    CAG.circle({"center":[131,-98.15],"radius":2.15})
).union(
    CAG.circle({"center":[59,-141.5],"radius":2.15})
).union(
    CAG.circle({"center":[59,-107.5],"radius":2.15})
).extrude({ offset: [0, 0, 2.4] });
}


function screw_holes_extrude_2_4_outline_fn(){
    return CAG.circle({"center":[150.1470521,-176.0640206],"radius":1.1})
.union(
    CAG.circle({"center":[131,-150.85],"radius":1.1})
).union(
    CAG.circle({"center":[131,-98.15],"radius":1.1})
).union(
    CAG.circle({"center":[59,-141.5],"radius":1.1})
).union(
    CAG.circle({"center":[59,-107.5],"radius":1.1})
).extrude({ offset: [0, 0, 2.4] });
}




                function _bottom_case_fn() {
                    

                // creating part 0 of case _bottom
                let _bottom__part_0 = bottom_case_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let _bottom__part_0_bounds = _bottom__part_0.getBounds();
                let _bottom__part_0_x = _bottom__part_0_bounds[0].x + (_bottom__part_0_bounds[1].x - _bottom__part_0_bounds[0].x) / 2
                let _bottom__part_0_y = _bottom__part_0_bounds[0].y + (_bottom__part_0_bounds[1].y - _bottom__part_0_bounds[0].y) / 2
                _bottom__part_0 = translate([-_bottom__part_0_x, -_bottom__part_0_y, 0], _bottom__part_0);
                _bottom__part_0 = rotate([0,0,0], _bottom__part_0);
                _bottom__part_0 = translate([_bottom__part_0_x, _bottom__part_0_y, 0], _bottom__part_0);

                _bottom__part_0 = translate([0,0,0], _bottom__part_0);
                let result = _bottom__part_0;
                
            

                // creating part 1 of case _bottom
                let _bottom__part_1 = standoff_extrude_2_4_outline_fn();

                // make sure that rotations are relative
                let _bottom__part_1_bounds = _bottom__part_1.getBounds();
                let _bottom__part_1_x = _bottom__part_1_bounds[0].x + (_bottom__part_1_bounds[1].x - _bottom__part_1_bounds[0].x) / 2
                let _bottom__part_1_y = _bottom__part_1_bounds[0].y + (_bottom__part_1_bounds[1].y - _bottom__part_1_bounds[0].y) / 2
                _bottom__part_1 = translate([-_bottom__part_1_x, -_bottom__part_1_y, 0], _bottom__part_1);
                _bottom__part_1 = rotate([0,0,0], _bottom__part_1);
                _bottom__part_1 = translate([_bottom__part_1_x, _bottom__part_1_y, 0], _bottom__part_1);

                _bottom__part_1 = translate([0,0,1.2], _bottom__part_1);
                result = result.union(_bottom__part_1);
                
            

                // creating part 2 of case _bottom
                let _bottom__part_2 = screw_holes_extrude_2_4_outline_fn();

                // make sure that rotations are relative
                let _bottom__part_2_bounds = _bottom__part_2.getBounds();
                let _bottom__part_2_x = _bottom__part_2_bounds[0].x + (_bottom__part_2_bounds[1].x - _bottom__part_2_bounds[0].x) / 2
                let _bottom__part_2_y = _bottom__part_2_bounds[0].y + (_bottom__part_2_bounds[1].y - _bottom__part_2_bounds[0].y) / 2
                _bottom__part_2 = translate([-_bottom__part_2_x, -_bottom__part_2_y, 0], _bottom__part_2);
                _bottom__part_2 = rotate([0,0,0], _bottom__part_2);
                _bottom__part_2 = translate([_bottom__part_2_x, _bottom__part_2_y, 0], _bottom__part_2);

                _bottom__part_2 = translate([0,0,1.2], _bottom__part_2);
                result = result.subtract(_bottom__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return _bottom_case_fn();
            }

        