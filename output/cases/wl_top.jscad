function top_case_extrude_1_8_outline_fn(){
    return new CSG.Path2D([[37,-161.5],[37,-87.5]]).appendArc([38,-86.5],{"radius":1,"clockwise":true,"large":false}).appendPoint([72,-86.5]).appendArc([73,-85.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([73,-78.15]).appendArc([74,-77.15],{"radius":1,"clockwise":true,"large":false}).appendPoint([90,-77.15]).appendArc([91,-76.15],{"radius":1,"clockwise":false,"large":false}).appendPoint([91,-74.75]).appendArc([92,-73.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([116,-73.75]).appendArc([117,-74.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([117,-76.15]).appendArc([118,-77.15],{"radius":1,"clockwise":false,"large":false}).appendPoint([134,-77.15]).appendArc([135,-78.15],{"radius":1,"clockwise":true,"large":false}).appendPoint([135,-78.85]).appendPoint([152,-78.85]).appendArc([153,-79.85],{"radius":1,"clockwise":true,"large":false}).appendPoint([153,-95.85]).appendPoint([175,-95.85]).appendPoint([174.9665952,-180.5607011]).appendPoint([175.7801475,-181.5129197]).appendArc([175.7269591,-182.8696042],{"radius":1,"clockwise":true,"large":false}).appendPoint([159.2456263,-199.350937]).appendArc([158.0385195,-199.5098556],{"radius":1,"clockwise":true,"large":false}).appendPoint([108.2012804,-170.7363122]).appendArc([107.9901874,-170.6449804],{"radius":1,"clockwise":false,"large":false}).appendPoint([81.1413063,-162.5426428]).appendArc([80.8523993,-162.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([38,-162.5]).appendArc([37,-161.5],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[150.1470521,-176.0640206],"radius":1.1})
.union(
    CAG.circle({"center":[131,-150.85],"radius":1.1})
).union(
    CAG.circle({"center":[131,-98.15],"radius":1.1})
).union(
    CAG.circle({"center":[59,-141.5],"radius":1.1})
).union(
    CAG.circle({"center":[59,-107.5],"radius":1.1})
).union(
    new CSG.Path2D([[148.4499959,-181.8622962],[158.3494908,-191.7617911]]).appendPoint([168.2489857,-181.8622962]).appendPoint([158.3494908,-171.9628013]).appendPoint([148.4499959,-181.8622962]).close().innerToCAG()
).union(
    new CSG.Path2D([[132.8687157,-172.2097047],[144.9930713,-179.2097047]]).appendPoint([151.9930713,-167.0853491]).appendPoint([139.8687157,-160.0853491]).appendPoint([132.8687157,-172.2097047]).close().innerToCAG()
).union(
    new CSG.Path2D([[133,-98.35],[147,-98.35]]).appendPoint([147,-84.35]).appendPoint([133,-84.35]).appendPoint([133,-98.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[133,-115.35],[147,-115.35]]).appendPoint([147,-101.35]).appendPoint([133,-101.35]).appendPoint([133,-115.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[133,-132.35],[147,-132.35]]).appendPoint([147,-118.35]).appendPoint([133,-118.35]).appendPoint([133,-132.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[133,-149.35],[147,-149.35]]).appendPoint([147,-135.35]).appendPoint([133,-135.35]).appendPoint([133,-149.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[115,-96.65],[129,-96.65]]).appendPoint([129,-82.65]).appendPoint([115,-82.65]).appendPoint([115,-96.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[115,-113.65],[129,-113.65]]).appendPoint([129,-99.65]).appendPoint([115,-99.65]).appendPoint([115,-113.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[115,-130.65],[129,-130.65]]).appendPoint([129,-116.65]).appendPoint([115,-116.65]).appendPoint([115,-130.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[115,-147.65],[129,-147.65]]).appendPoint([129,-133.65]).appendPoint([115,-133.65]).appendPoint([115,-147.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[97,-93.25],[111,-93.25]]).appendPoint([111,-79.25]).appendPoint([97,-79.25]).appendPoint([97,-93.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[97,-110.25],[111,-110.25]]).appendPoint([111,-96.25]).appendPoint([97,-96.25]).appendPoint([97,-110.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[97,-127.25],[111,-127.25]]).appendPoint([111,-113.25]).appendPoint([97,-113.25]).appendPoint([97,-127.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[97,-144.25],[111,-144.25]]).appendPoint([111,-130.25]).appendPoint([97,-130.25]).appendPoint([97,-144.25]).close().innerToCAG()
).union(
    new CSG.Path2D([[79,-96.65],[93,-96.65]]).appendPoint([93,-82.65]).appendPoint([79,-82.65]).appendPoint([79,-96.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[79,-113.65],[93,-113.65]]).appendPoint([93,-99.65]).appendPoint([79,-99.65]).appendPoint([79,-113.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[79,-130.65],[93,-130.65]]).appendPoint([93,-116.65]).appendPoint([79,-116.65]).appendPoint([79,-130.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[79,-147.65],[93,-147.65]]).appendPoint([93,-133.65]).appendPoint([79,-133.65]).appendPoint([79,-147.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[61,-106],[75,-106]]).appendPoint([75,-92]).appendPoint([61,-92]).appendPoint([61,-106]).close().innerToCAG()
).union(
    new CSG.Path2D([[61,-123],[75,-123]]).appendPoint([75,-109]).appendPoint([61,-109]).appendPoint([61,-123]).close().innerToCAG()
).union(
    new CSG.Path2D([[61,-140],[75,-140]]).appendPoint([75,-126]).appendPoint([61,-126]).appendPoint([61,-140]).close().innerToCAG()
).union(
    new CSG.Path2D([[61,-157],[75,-157]]).appendPoint([75,-143]).appendPoint([61,-143]).appendPoint([61,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[43,-106],[57,-106]]).appendPoint([57,-92]).appendPoint([43,-92]).appendPoint([43,-106]).close().innerToCAG()
).union(
    new CSG.Path2D([[43,-123],[57,-123]]).appendPoint([57,-109]).appendPoint([43,-109]).appendPoint([43,-123]).close().innerToCAG()
).union(
    new CSG.Path2D([[43,-140],[57,-140]]).appendPoint([57,-126]).appendPoint([43,-126]).appendPoint([43,-140]).close().innerToCAG()
).union(
    new CSG.Path2D([[43,-157],[57,-157]]).appendPoint([57,-143]).appendPoint([43,-143]).appendPoint([43,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.3200802,-166.9187494],[128.8430418,-170.542216]]).appendPoint([132.4665084,-157.0192544]).appendPoint([118.9435468,-153.3957878]).appendPoint([115.3200802,-166.9187494]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.8] });
}


function xlcontroller_area_extrude_9_8_outline_fn(){
    return new CSG.Path2D([[153,-154.85],[153,-95.85]]).appendPoint([175,-95.85]).appendPoint([174.9665002,-180.801636]).appendPoint([153,-154.85]).close().innerToCAG()
.extrude({ offset: [0, 0, 9.8] });
}


function top_cover_area_extrude_9_8_outline_fn(){
    return new CSG.Path2D([[151,-152.85],[151,-95.85]]).appendPoint([175,-95.85]).appendPoint([174.9665002,-180.801636]).appendPoint([151,-152.85]).close().innerToCAG()
.extrude({ offset: [0, 0, 9.8] });
}


function inner_top_cover_area_extrude_8_outline_fn(){
    return new CSG.Path2D([[153,-150.85],[153,-97.85]]).appendPoint([173,-97.85]).appendPoint([172.8451798,-175.8518886]).appendPoint([153,-150.85]).close().innerToCAG()
.extrude({ offset: [0, 0, 8] });
}


function power_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[163,-142.85],[175,-142.85]]).appendPoint([175,-137.85]).appendPoint([163,-137.85]).appendPoint([163,-142.85]).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
}


function usb_extrude_5_outline_fn(){
    return new CSG.Path2D([[157,-101.35],[169,-101.35]]).appendPoint([169,-95.35]).appendPoint([157,-95.35]).appendPoint([157,-101.35]).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}


function reset_extrude_1_8_outline_fn(){
    return CAG.circle({"center":[171,-162.35],"radius":0.8})
.extrude({ offset: [0, 0, 1.8] });
}




                function _wl_top_case_fn() {
                    

                // creating part 0 of case _wl_top
                let _wl_top__part_0 = top_case_extrude_1_8_outline_fn();

                // make sure that rotations are relative
                let _wl_top__part_0_bounds = _wl_top__part_0.getBounds();
                let _wl_top__part_0_x = _wl_top__part_0_bounds[0].x + (_wl_top__part_0_bounds[1].x - _wl_top__part_0_bounds[0].x) / 2
                let _wl_top__part_0_y = _wl_top__part_0_bounds[0].y + (_wl_top__part_0_bounds[1].y - _wl_top__part_0_bounds[0].y) / 2
                _wl_top__part_0 = translate([-_wl_top__part_0_x, -_wl_top__part_0_y, 0], _wl_top__part_0);
                _wl_top__part_0 = rotate([0,0,0], _wl_top__part_0);
                _wl_top__part_0 = translate([_wl_top__part_0_x, _wl_top__part_0_y, 0], _wl_top__part_0);

                _wl_top__part_0 = translate([0,0,5.2], _wl_top__part_0);
                let result = _wl_top__part_0;
                
            

                // creating part 1 of case _wl_top
                let _wl_top__part_1 = xlcontroller_area_extrude_9_8_outline_fn();

                // make sure that rotations are relative
                let _wl_top__part_1_bounds = _wl_top__part_1.getBounds();
                let _wl_top__part_1_x = _wl_top__part_1_bounds[0].x + (_wl_top__part_1_bounds[1].x - _wl_top__part_1_bounds[0].x) / 2
                let _wl_top__part_1_y = _wl_top__part_1_bounds[0].y + (_wl_top__part_1_bounds[1].y - _wl_top__part_1_bounds[0].y) / 2
                _wl_top__part_1 = translate([-_wl_top__part_1_x, -_wl_top__part_1_y, 0], _wl_top__part_1);
                _wl_top__part_1 = rotate([0,0,0], _wl_top__part_1);
                _wl_top__part_1 = translate([_wl_top__part_1_x, _wl_top__part_1_y, 0], _wl_top__part_1);

                _wl_top__part_1 = translate([0,0,5.2], _wl_top__part_1);
                result = result.union(_wl_top__part_1);
                
            

                // creating part 2 of case _wl_top
                let _wl_top__part_2 = top_cover_area_extrude_9_8_outline_fn();

                // make sure that rotations are relative
                let _wl_top__part_2_bounds = _wl_top__part_2.getBounds();
                let _wl_top__part_2_x = _wl_top__part_2_bounds[0].x + (_wl_top__part_2_bounds[1].x - _wl_top__part_2_bounds[0].x) / 2
                let _wl_top__part_2_y = _wl_top__part_2_bounds[0].y + (_wl_top__part_2_bounds[1].y - _wl_top__part_2_bounds[0].y) / 2
                _wl_top__part_2 = translate([-_wl_top__part_2_x, -_wl_top__part_2_y, 0], _wl_top__part_2);
                _wl_top__part_2 = rotate([0,0,0], _wl_top__part_2);
                _wl_top__part_2 = translate([_wl_top__part_2_x, _wl_top__part_2_y, 0], _wl_top__part_2);

                _wl_top__part_2 = translate([0,0,5.2], _wl_top__part_2);
                result = result.union(_wl_top__part_2);
                
            

                // creating part 3 of case _wl_top
                let _wl_top__part_3 = inner_top_cover_area_extrude_8_outline_fn();

                // make sure that rotations are relative
                let _wl_top__part_3_bounds = _wl_top__part_3.getBounds();
                let _wl_top__part_3_x = _wl_top__part_3_bounds[0].x + (_wl_top__part_3_bounds[1].x - _wl_top__part_3_bounds[0].x) / 2
                let _wl_top__part_3_y = _wl_top__part_3_bounds[0].y + (_wl_top__part_3_bounds[1].y - _wl_top__part_3_bounds[0].y) / 2
                _wl_top__part_3 = translate([-_wl_top__part_3_x, -_wl_top__part_3_y, 0], _wl_top__part_3);
                _wl_top__part_3 = rotate([0,0,0], _wl_top__part_3);
                _wl_top__part_3 = translate([_wl_top__part_3_x, _wl_top__part_3_y, 0], _wl_top__part_3);

                _wl_top__part_3 = translate([0,0,5.2], _wl_top__part_3);
                result = result.subtract(_wl_top__part_3);
                
            

                // creating part 4 of case _wl_top
                let _wl_top__part_4 = power_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let _wl_top__part_4_bounds = _wl_top__part_4.getBounds();
                let _wl_top__part_4_x = _wl_top__part_4_bounds[0].x + (_wl_top__part_4_bounds[1].x - _wl_top__part_4_bounds[0].x) / 2
                let _wl_top__part_4_y = _wl_top__part_4_bounds[0].y + (_wl_top__part_4_bounds[1].y - _wl_top__part_4_bounds[0].y) / 2
                _wl_top__part_4 = translate([-_wl_top__part_4_x, -_wl_top__part_4_y, 0], _wl_top__part_4);
                _wl_top__part_4 = rotate([0,0,0], _wl_top__part_4);
                _wl_top__part_4 = translate([_wl_top__part_4_x, _wl_top__part_4_y, 0], _wl_top__part_4);

                _wl_top__part_4 = translate([0,0,5.2], _wl_top__part_4);
                result = result.subtract(_wl_top__part_4);
                
            

                // creating part 5 of case _wl_top
                let _wl_top__part_5 = usb_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _wl_top__part_5_bounds = _wl_top__part_5.getBounds();
                let _wl_top__part_5_x = _wl_top__part_5_bounds[0].x + (_wl_top__part_5_bounds[1].x - _wl_top__part_5_bounds[0].x) / 2
                let _wl_top__part_5_y = _wl_top__part_5_bounds[0].y + (_wl_top__part_5_bounds[1].y - _wl_top__part_5_bounds[0].y) / 2
                _wl_top__part_5 = translate([-_wl_top__part_5_x, -_wl_top__part_5_y, 0], _wl_top__part_5);
                _wl_top__part_5 = rotate([0,0,0], _wl_top__part_5);
                _wl_top__part_5 = translate([_wl_top__part_5_x, _wl_top__part_5_y, 0], _wl_top__part_5);

                _wl_top__part_5 = translate([0,0,7.2], _wl_top__part_5);
                result = result.subtract(_wl_top__part_5);
                
            

                // creating part 6 of case _wl_top
                let _wl_top__part_6 = reset_extrude_1_8_outline_fn();

                // make sure that rotations are relative
                let _wl_top__part_6_bounds = _wl_top__part_6.getBounds();
                let _wl_top__part_6_x = _wl_top__part_6_bounds[0].x + (_wl_top__part_6_bounds[1].x - _wl_top__part_6_bounds[0].x) / 2
                let _wl_top__part_6_y = _wl_top__part_6_bounds[0].y + (_wl_top__part_6_bounds[1].y - _wl_top__part_6_bounds[0].y) / 2
                _wl_top__part_6 = translate([-_wl_top__part_6_x, -_wl_top__part_6_y, 0], _wl_top__part_6);
                _wl_top__part_6 = rotate([0,0,0], _wl_top__part_6);
                _wl_top__part_6 = translate([_wl_top__part_6_x, _wl_top__part_6_y, 0], _wl_top__part_6);

                _wl_top__part_6 = translate([0,0,13.2], _wl_top__part_6);
                result = result.subtract(_wl_top__part_6);
                
            
                    return result;
                }
            
            

                function wl_top_case_fn() {
                    

                // creating part 0 of case wl_top
                let wl_top__part_0 = _wl_top_case_fn();

                // make sure that rotations are relative
                let wl_top__part_0_bounds = wl_top__part_0.getBounds();
                let wl_top__part_0_x = wl_top__part_0_bounds[0].x + (wl_top__part_0_bounds[1].x - wl_top__part_0_bounds[0].x) / 2
                let wl_top__part_0_y = wl_top__part_0_bounds[0].y + (wl_top__part_0_bounds[1].y - wl_top__part_0_bounds[0].y) / 2
                wl_top__part_0 = translate([-wl_top__part_0_x, -wl_top__part_0_y, 0], wl_top__part_0);
                wl_top__part_0 = rotate([0,0,0], wl_top__part_0);
                wl_top__part_0 = translate([wl_top__part_0_x, wl_top__part_0_y, 0], wl_top__part_0);

                wl_top__part_0 = translate([0,0,0], wl_top__part_0);
                let result = wl_top__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return wl_top_case_fn();
            }

        