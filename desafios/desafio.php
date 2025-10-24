<?php

class ListNode {
    public $val = 0;
      public $next = null;
      function __construct($val = 0, $next = null) {
          $this->val = $val;
          $this->next = $next;
    }
}

function mergeTwoLists($array1, $array2) {
    if (empty($array1) && empty($array2)) return null;

    $head1 = null;
    $current3 = null;
    for ($i = 0; $i < count($array1); $i++) {
        if ($i == 0) {
            $head1 = new ListNode($array1[$i]);
            $current3 = $head1;
        } else {
            $newNode = new ListNode($array1[$i]);
            $current3->next = $newNode;
            $current3 = $current3->next;
        }
    }

    $head2 = null;
    
    for ($j = 0; $j < count($array2); $j++) {
        if ($j == 0) {
            $head2 = new ListNode($array2[$j]);
            $current3->next = $head2;
        } else {
            $newNode = new ListNode($array2[$j]);
            $current3->next = $newNode;
            $current3 = $current3->next;
        }
    }

    
  
    return $current3;
}


$teste = mergeTwoLists([1,2,3],[1,2,2]);
print_r($teste);