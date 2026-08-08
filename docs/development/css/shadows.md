---
title: Shadows
layout: default
nav_order: 4
---

# Shadows

They are properties that apply a shadow to an element.

The two types are text-shadows and box-shadows.


## Text Shadows

Applies shadows to text.

Defined in CSS as <code> text-shadow: horizontal vertical blur color; </code>

You can also add an additional shadow with a comma (,). 

EX:

<code> text-shadow: horizontal vertical blur color, horizontal2 vertical2 blur2 color2; </code>

## Box Shadows

Applies shadows to an element entirely.

Defined in CSS as <code> box-shadow: horizontal vertical blur spread color; </code>

You can also add an additional shadow with a comma (,). 

EX:

<code> box-shadow: horizontal vertical blur spread color inset, horizontal2 vertical2 blur2 spread2 color2; </code>

### Properties

Can be used with px, rem, and em as far as I know.

Horizontal changes the Horizontal (left and right) offset of the shadow.

Positive values move to the right, while negative ones move to the left.

Vertical changes the Vertical (up and down) offset of the shadow.

Positive values move it down, while negative values move it up.

Blur makes the shadow more blurry, the higher the number, the more the blur effect.

Color is the color of the shadow.

Spread defines the spread radius of the shadow.

Positive values increase the size of the shadow, while negative values decrease it.

Inset changes the shadow from an outer shadow (The default outset) into an inner shadow (inset).